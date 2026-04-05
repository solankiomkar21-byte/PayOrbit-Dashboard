import React from 'react';

export default function Payouts() {
  return (
    <div className="card">
      <h2 className="card-title">Vendor & Supplier Payouts</h2>
      <p style={{ color: 'var(--text-muted)' }}>Direct outward remittances for import bills and global SaaS subscriptions.</p>
      <div style={{ padding: '2rem', background: 'rgba(99, 102, 241, 0.05)', borderRadius: '12px', marginTop: '1.5rem' }}>
        <div className="metric-value" style={{ fontSize: '2rem', marginBottom: '1rem' }}>$0.00</div>
        <button className="btn btn-primary">Initiate Global Transfer</button>
      </div>
    </div>
  );
}
