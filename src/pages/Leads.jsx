import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'

function Leads() {
  const [leads, setLeads] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", status: "New" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", status: "Contacted" },
  ])

  const [showForm, setShowForm] = useState(false)
  const [newLead, setNewLead] = useState({ name: '', email: '', status: 'New' })

  const handleChange = (e) => {
    setNewLead({ ...newLead, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = leads.length ? leads[leads.length - 1].id + 1 : 1
    setLeads([...leads, { id, ...newLead }])
    setNewLead({ name: '', email: '', status: 'New' })
    setShowForm(false)
  }

  return (
    <Layout>
      <div style={{ display: 'flex', gap: '20px' }}>
        {/* <Sidebar /> */}

        <div style={{ flex: 1 }}>
          <h1>Leads</h1>
          <button 
            onClick={() => setShowForm(true)}
            style={{ marginBottom: '20px', padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Add Lead
          </button>

          {/* Add Lead Form Modal */}
          {showForm && (
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ background: 'white', padding: '20px', borderRadius: '8px', minWidth: '300px' }}>
                <h2>Add New Lead</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input type="text" name="name" placeholder="Name" value={newLead.name} onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Email" value={newLead.email} onChange={handleChange} required />
                  <select name="status" value={newLead.status} onChange={handleChange}>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Closed">Closed</option>
                  </select>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button type="submit" style={{ padding: '8px 16px', background: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save</button>
                    <button type="button" onClick={() => setShowForm(false)} style={{ padding: '8px 16px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Leads Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {leads.map(lead => (
              <div key={lead.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                <h2>{lead.name}</h2>
                <p>Email: {lead.email}</p>
                <p>Status: <strong>{lead.status}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Leads