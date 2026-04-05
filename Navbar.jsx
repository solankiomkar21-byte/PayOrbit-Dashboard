import React from 'react';

export default function Navbar({ exporter, theme }) {
  return (
    <header className="navbar" style={{ 
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
      padding: '1rem 2rem', background: 'var(--surface)', borderBottom: '1px solid var(--border)' 
    }}>
      <div className="navbar-left">
        <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Organization:</span>
        <strong style={{ marginLeft: '0.5rem', color: 'var(--primary)' }}>{exporter?.businessName || 'Demo Exporter'}</strong>
      </div>
      <div className="navbar-right" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <div className="status-badge" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem' }}>
          ● Live Mode
        </div>
        <div className="user-profile" style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(45deg, #6366f1, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
          A
        </div>
      </div>
    </header>
  );
}
