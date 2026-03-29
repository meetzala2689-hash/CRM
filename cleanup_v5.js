import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src', 'pages');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(fullPath));
        } else {
            if (file.endsWith('.jsx')) results.push(fullPath);
        }
    });
    return results;
}

const files = walk(pagesDir);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Check if it has the redundant layout
    if (content.includes('<Sidebar />') && content.includes('className="content-page"')) {
        console.log(`Cleaning up ${file}...`);
        
        const componentMatch = content.match(/function\s+(\w+)/);
        if (!componentMatch) return;
        const componentName = componentMatch[1];
        
        const cpIdx = content.indexOf('<div className="content-page">');
        if (cpIdx === -1) return;
        
        let endIdx = content.indexOf('<footer');
        if (endIdx === -1) endIdx = content.lastIndexOf(');');
        
        if (endIdx === -1) return;
        
        let jsx = content.substring(cpIdx, endIdx);
        
        // Find the last complete </div> belonging to the content-page
        // Assuming content-page div itself closes right before footer or end of return
        const lastDiv = jsx.lastIndexOf('</div>');
        if (lastDiv !== -1) {
            jsx = jsx.substring(0, lastDiv + 6);
        }

        // Clean scripts
        jsx = jsx.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        
        // Clean class to className
        jsx = jsx.replace(/class=/g, 'className=');

        const newContent = `import React from 'react';

function ${componentName}() {
  return (
    ${jsx}
  );
}

export default ${componentName};
`;
        
        fs.writeFileSync(file, newContent, 'utf8');
    }
});
