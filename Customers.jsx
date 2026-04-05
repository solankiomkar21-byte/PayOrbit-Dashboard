import React from 'react';

export default function Customers() {
  return (
    <div className="card">
      <h2 className="card-title">Customer Directory</h2>
      <p style={{ color: 'var(--text-muted)' }}>Manage your international buyers and their payment preferences.</p>
      <div style={{ marginTop: '2rem', textAlign: 'center', padding: '3rem', border: '2px dashed var(--border)', borderRadius: '12px' }}>
        <h3>No Customers Added</h3>
        <button className="btn btn-primary" style={{ marginTop: '1rem' }}>+ Add First Buyer</button>
      </div>
    </div>
  );
}
