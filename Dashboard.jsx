import React from 'react';
import { useCurrency } from './CurrencyContext.jsx';

export default function Dashboard({ summary }) {
  const { format } = useCurrency();

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title">Executive Summary</h1>
        <p className="page-subtitle">Real-time overview of your cross-border capital flow.</p>
      </div>

      <div className="metrics-grid">
        <div className="card metric-card">
          <div className="card-title">Total Inward Volume</div>
          <div className="metric-value text-gradient">{format(142500, 'USD')}</div>
          <div className="metric-label">Processed this month</div>
        </div>
        <div className="card metric-card">
          <div className="card-title">Settled amount</div>
          <div className="metric-value" style={{ color: 'var(--success-400)' }}>{format(128000, 'USD')}</div>
          <div className="metric-label">92% Liquidation rate</div>
        </div>
        <div className="card metric-card">
          <div className="card-title">Active Alerts</div>
          <div className="metric-value" style={{ color: 'var(--danger-400)' }}>03</div>
          <div className="metric-label">Pending FIRC linkage</div>
        </div>
      </div>
    </div>
  );
}
