import React from 'react';

export default function VirtualAccounts() {
  return (
    <div className="card">
      <h2 className="card-title">Local Collection Accounts</h2>
      <div className="va-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
        <div className="card" style={{ borderLeft: '4px solid #6366f1' }}>
          <strong>🇺🇸 USD Collection Account (J.P. Morgan)</strong>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Account Number: **** 8829 | Routing: 021000021</p>
        </div>
        <div className="card" style={{ borderLeft: '4px solid #22c55e' }}>
          <strong>🇪🇺 EUR IBAN (Deutsche Bank)</strong>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>IBAN: DE89 1007 0000 0123 4567 89</p>
        </div>
      </div>
    </div>
  );
}
