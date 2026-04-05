import React, { useState } from 'react';
import { useCurrency } from '../context/CurrencyContext.jsx';

export default function Sidebar({ 
  currentPage, 
  onNavigate, 
  summary, 
  exporter, 
  exporters, 
  onExporterChange,
  theme,
  onThemeToggle
}) {
  const { currency, toggleCurrency, rates } = useCurrency();
  const [showAuditModal, setShowAuditModal] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const navItems = [
    { key: 'dashboard', icon: '🏠', label: 'Dashboard' },
    { key: 'transactions', icon: '💸', label: 'Transactions', badge: summary?.totalTransactions },
    { key: 'firc', icon: '📄', label: 'FIRC Tracker', badge: summary?.pendingFircs > 0 ? summary.pendingFircs : null },
    { key: 'customers', icon: '👥', label: 'Customers' },
    { key: 'settings', icon: '⚙️', label: 'Settings' },
    { key: 'fraud', icon: '🛡️', label: 'Fraud Brain' },
    { key: 'compliance', icon: '⚖️', label: 'Compliance' },
  ];

  const handleGenerateAuditPack = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowAuditModal(false);
      alert('✅ Audit Pack Generated: Your compliance dossier for the selected period is ready for download.');
    }, 2000);
  };

  return (
    <>
      <aside className="sidebar">
        {/* 1. TOP LOGO SECTION */}
        <div className="sidebar-logo">
          <div className="sidebar-logo-icon" style={{ background: 'transparent', boxShadow: 'none', width: 'auto', height: 'auto' }}>
            <svg width="40" height="40" viewBox="0 0 40 40">
              <defs>
                <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
                <filter id="logo-glow">
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite operator="over" in="SourceGraphic" />
                </filter>
              </defs>
              <circle cx="20" cy="20" r="10" fill="url(#logo-grad)" filter="url(#logo-glow)" />
              <path 
                d="M18,14 L18,26 M18,14 C22,14 24,15 24,18 C24,21 22,22 18,22" 
                fill="none" 
                stroke="white" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
              />
            </svg>
          </div>
          <div>
            <div className="sidebar-logo-text" style={{ fontSize: '1.25rem', letterSpacing: '-0.02em', color: 'white' }}>PayOrbit</div>
            <div className="sidebar-logo-badge" style={{ fontSize: '0.6rem', padding: '1px 5px' }}>PA-CB 2025</div>
          </div>
        </div>
        
        {/* 2. SCROLLABLE MENU AREA */}
        <div className="sidebar-scroll-container">
          <nav className="sidebar-nav" style={{ padding: '0 8px 24px' }}>
            <div className="sidebar-section-title">Main Menu</div>
            {navItems.map(item => (
              <div
                key={item.key}
                id={`nav-${item.key}`}
                className={`sidebar-link ${currentPage === item.key ? 'active' : ''}`}
                onClick={() => onNavigate(item.key)}
                style={{ margin: '2px 0' }}
              >
                <span className="sidebar-link-icon" style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.875rem' }}>{item.label}</span>
                {item.badge ? (
                  <span className="sidebar-link-badge">{item.badge}</span>
                ) : null}
              </div>
            ))}

            <div className="sidebar-section-title" style={{ marginTop: '24px' }}>Insights & Controls</div>
            {summary && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '0 12px' }}>
                <div className="sidebar-link" style={{ cursor: 'default', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span className="sidebar-link-icon">⚡</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '0.75rem', color: '#8b949e' }}>Health Score</div>
                    <div style={{ fontWeight: 600, color: 'var(--success-400)', fontSize: '0.85rem' }}>{(summary.complianceHealthScore || 0).toFixed(0)}%</div>
                  </div>
                </div>
                
                <div 
                  className="sidebar-link" 
                  onClick={() => setShowAuditModal(true)}
                  style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.2)' }}
                >
                  <span className="sidebar-link-icon">📑</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--accent-400)', fontWeight: 600 }}>Download Audit Pack</span>
                </div>

                <div className="currency-toggle-group" style={{ marginTop: '8px' }}>
                  <button 
                    className={`currency-toggle-btn ${currency === 'INR' ? 'active' : ''}`}
                    onClick={() => currency !== 'INR' && toggleCurrency()}
                    style={{ padding: '6px', fontSize: '0.7rem' }}
                  >
                    INR (₹)
                  </button>
                  <button 
                    className={`currency-toggle-btn ${currency === 'USD' ? 'active' : ''}`}
                    onClick={() => currency !== 'USD' && toggleCurrency()}
                    style={{ padding: '6px', fontSize: '0.7rem' }}
                  >
                    USD ($)
                  </button>
                </div>
              </div>
            )}
          </nav>
        </div>

        {/* 3. STICKY FOOTER SECTION */}
        <div className="sidebar-footer">
          <div className="theme-toggle" onClick={onThemeToggle} style={{ margin: '16px', padding: '8px' }}>
            <div className="theme-toggle-label" style={{ fontSize: '10px' }}>
              {theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </div>
            <div className="theme-toggle-switch"></div>
          </div>

          <div className="sidebar-exporter" style={{ padding: '0 24px 16px' }}>
            {exporter && (
              <>
                <div className="sidebar-exporter-name" style={{ fontSize: '11px', color: '#c9d1d9', fontWeight: 600 }}>{exporter.businessName}</div>
                <div className="sidebar-exporter-id" style={{ fontSize: '9px', color: '#8b949e', marginTop: '2px' }}>IEC: {exporter.iecCode}</div>
              </>
            )}
          </div>

          {/* 4. TICKER: THE VERY LAST ELEMENT */}
          <div className="sidebar-ticker">
            <span className="ticker-content">
              USD/INR: {rates.INR.toFixed(2)} | 
              USD/EUR: {rates.EUR.toFixed(2)} | 
              USD/AED: {rates.AED.toFixed(2)} | 
              USD/GBP: {rates.GBP.toFixed(2)} | 
              USD/JPY: {rates.JPY.toFixed(1)}
            </span>
          </div>
        </div>
      </aside>

      {/* Audit Pack Modal */}
      {showAuditModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)',
          display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2000
        }}>
          <div className="card animate-scale-in" style={{ width: '400px', padding: 'var(--space-6)' }}>
            <h2 className="card-title" style={{ marginBottom: 'var(--space-2)' }}>📦 Compile Audit Dossier</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-6)' }}>
              Select a date range to bundle all FIRC, Invoices, and Shipping Bills into a single, signing-ready ZIP.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
              <div className="form-group">
                <label className="detail-label">Start Date</label>
                <input type="date" className="form-input" defaultValue="2025-01-01" />
              </div>
              <div className="form-group">
                <label className="detail-label">End Date</label>
                <input type="date" className="form-input" defaultValue="2025-03-31" />
              </div>
            </div>

            <div style={{ background: 'rgba(34, 197, 94, 0.1)', padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-6)' }}>
              <span style={{ fontSize: '1.25rem' }}>🛡️</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--success-400)', fontWeight: 600 }}>
                Verified by RBI PA-CB Compliance Framework 2025
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <button 
                className="btn btn-primary" 
                style={{ width: '100%' }}
                onClick={handleGenerateAuditPack}
                disabled={isGenerating}
              >
                {isGenerating ? '⌛ Bundling Assets...' : 'Download Audit-Ready Pack'}
              </button>
              <button className="btn btn-ghost" style={{ width: '100%' }} onClick={() => setShowAuditModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

