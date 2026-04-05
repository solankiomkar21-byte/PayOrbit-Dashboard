import React from 'react';
import { useCurrency } from './CurrencyContext.jsx';

export default function Sidebar({ 
  currentPage, 
  onNavigate, 
  summary, 
  exporter, 
  theme, 
  onThemeToggle 
}) {
  const { currency, toggleCurrency, rates } = useCurrency();

  // Navigation Items with simple Emojis
  const navItems = [
    { key: 'dashboard', icon: '📊', label: 'Dashboard' },
    { key: 'transactions', icon: '💳', label: 'Transactions' },
    { key: 'firc', icon: '📄', label: 'FIRC Tracker' },
    { key: 'customers', icon: '👥', label: 'Customers' },
    { key: 'settlement', icon: '🏦', label: 'Settlements' },
    { key: 'virtual-accounts', icon: '🆔', label: 'Virtual Accounts' },
    { key: 'payouts', icon: '💸', label: 'Payouts' },
    { key: 'compliance', icon: '⚖️', label: 'Compliance' },
    { key: 'fraud', icon: '🛡️', label: 'Fraud Brain' },
    { key: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <aside className="sidebar" style={{ 
      width: '260px', 
      background: '#020617', 
      height: '100vh', 
      borderRight: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Logo Section */}
      <div className="sidebar-logo" style={{ padding: '2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.5rem' }}>🚀</span>
          <div style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', letterSpacing: '-0.5px' }}>
            PayOrbit
          </div>
        </div>
        <div style={{ fontSize: '0.65rem', color: '#6366f1', fontWeight: 'bold', marginTop: '4px', textTransform: 'uppercase' }}>
          RBI PA-CB 2026 Ready
        </div>
      </div>
      
      {/* Navigation Menu */}
      <nav style={{ flex: 1, padding: '1.5rem 0.8rem', overflowY: 'auto' }}>
        <div style={{ fontSize: '0.7rem', color: '#475569', fontWeight: 'bold', textTransform: 'uppercase', padding: '0 1rem 0.8rem', letterSpacing: '1px' }}>
          Main Menu
        </div>
        {navItems.map(item => (
          <div
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`sidebar-link ${currentPage === item.key ? 'active' : ''}`}
            style={{
              padding: '0.8rem 1rem',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '4px',
              color: currentPage === item.key ? '#6366f1' : '#94a3b8',
              background: currentPage === item.key ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
              transition: 'all 0.2s ease',
              fontSize: '0.9rem',
              fontWeight: currentPage === item.key ? '600' : '400'
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Sidebar Footer */}
      <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#020617' }}>
        <div 
          onClick={onThemeToggle}
          style={{ 
            padding: '10px', 
            borderRadius: '8px', 
            background: 'rgba(255,255,255,0.03)', 
            cursor: 'pointer',
            textAlign: 'center',
            fontSize: '0.8rem',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
        >
          {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </div>
        
        {exporter && (
          <div style={{ marginTop: '1.2rem', padding: '0 5px' }}>
            <div style={{ fontSize: '0.75rem', color: '#f8fafc', fontWeight: '600' }}>{exporter.businessName}</div>
            <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '2px' }}>Verified Partner</div>
          </div>
        )}
      </div>

      {/* Live Currency Ticker at Bottom */}
      <div style={{ 
        background: '#6366f1', 
        color: 'white', 
        fontSize: '0.65rem', 
        padding: '4px 0', 
        textAlign: 'center',
        fontWeight: 'bold',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
      }}>
        USD/INR: {rates.INR.toFixed(2)} | USD/EUR: {rates.EUR.toFixed(2)}
      </div>
    </aside>
  );
}

