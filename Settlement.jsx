import React from 'react';

export default function Settlement() {
  return (
    <div className="card">
      <h2 className="card-title">Bank Settlements</h2>
      <div className="grid-2" style={{ marginTop: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="card" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="detail-label">Next Payout</div>
          <div className="metric-value" style={{ fontSize: '1.5rem' }}>₹ 8,45,200.00</div>
          <div className="detail-value">ETD: 24 Hours</div>
        </div>
        <div className="card" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="detail-label">Settlement Batch</div>
          <div className="metric-value" style={{ fontSize: '1.5rem' }}>#SB-99342</div>
          <div className="detail-value">Status: Processing</div>
        </div>
      </div>
    </div>
  );
}
