import React, { useState } from 'react';
import { useCurrency } from './CurrencyContext.jsx';

export default function Sidebar({ currentPage, onNavigate, summary, exporter, theme, onThemeToggle }) {
  const { currency, toggleCurrency, rates } = useCurrency();
  
  const navItems = [
    { key: 'dashboard', icon: '📊', label: 'Dashboard' },
    { key: 'transactions', icon: '💳', label: 'Transactions' },
    { key: 'customers', icon: '👥', label: 'Customers' },
    { key: 'settlement', icon: '🏦', label: 'Settlements' },
    { key: 'virtual-accounts', icon: '🆔', label: 'Virtual Accounts' },
    { key: 'payouts', icon: '💸', label: 'Payouts' },
    { key: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-text">PayOrbit</div>
        <div className="sidebar-logo-badge">PA-CB 2026</div>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <div
            key={item.key}
            className={`sidebar-link ${currentPage === item.key ? 'active' : ''}`}
            onClick={() => onNavigate(item.key)}
          >
            <span className="sidebar-link-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="theme-toggle" onClick={onThemeToggle}>
          {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
        </div>
      </div>
    </aside>
  );
}
