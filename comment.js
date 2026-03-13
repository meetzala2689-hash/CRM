import fs from 'fs';
let content = fs.readFileSync('D:/BI/crm/src/pages/Pinnacle.jsx', 'utf8');
const lines = content.split('\n');

if (!lines[144].includes('{/*')) {
    lines[144] = '{/* ' + lines[144];
    lines[2964] = lines[2964] + ' */}';
    fs.writeFileSync('D:/BI/crm/src/pages/Pinnacle.jsx', lines.join('\n'));
    console.log('Successfully commented out header and sidenav');
}
