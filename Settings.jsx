import React from 'react';

export default function Settings() {
  return (
    <div className="card">
      <h2 className="card-title">System Settings</h2>
      <div className="form-group" style={{ marginTop: '2rem' }}>
        <label className="detail-label">Webhooks Endpoint</label>
        <input type="text" className="form-input" defaultValue="https://your-api.com/webhook" />
      </div>
      <div className="form-group" style={{ marginTop: '1rem' }}>
        <label className="detail-label">Notification Email</label>
        <input type="email" className="form-input" defaultValue="admin@startup.com" />
      </div>
      <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Save Configuration</button>
    </div>
  );
}
