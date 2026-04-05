import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Transactions from './pages/Transactions.jsx';
import TransactionDetail from './pages/TransactionDetail.jsx';
import FIRCTracker from './pages/FIRCTracker.jsx';
import FraudBrain from './pages/FraudBrain.jsx';
import Compliance from './pages/Compliance.jsx';
import TopHeader from './components/TopHeader.jsx';
import { api } from './utils/api.js';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [selectedTransactionId, setSelectedTransactionId] = useState(null);
  const [exporters, setExporters] = useState([]);
  const [selectedExporter, setSelectedExporter] = useState(null);
  const [summary, setSummary] = useState(null);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    loadExporters();
  }, []);

  useEffect(() => {
    if (selectedExporter) {
      loadSummary();
    }
  }, [selectedExporter]);

  async function loadExporters() {
    try {
      const data = await api.getExporters();
      setExporters(data.exporters);
      if (data.exporters.length > 0) {
        setSelectedExporter(data.exporters[0]);
      } else {
        setSummary({ error: 'No exporters configured in database' });
      }
    } catch (err) {
      console.error('Failed to load exporters:', err);
      setSummary({ error: `Backend Handshake Failed: ${err.message}` });
    }
  }

  async function loadSummary() {
    try {
      console.log('Fetching dashboard summary...');
      const data = await api.getDashboardSummary(selectedExporter?.id);
      setSummary(data);
    } catch (err) {
      console.error('Failed to load summary:', err);
      setSummary({ error: err.message || 'Connection failed' });
    }
  }

  function navigateToTransaction(id) {
    setSelectedTransactionId(id);
    setCurrentPage('transaction-detail');
  }

  function renderPage() {
    switch (currentPage) {
      case 'dashboard':
        return (
          <Dashboard
            summary={summary}
            exporter={selectedExporter}
            onViewTransaction={navigateToTransaction}
            onRefresh={loadSummary}
          />
        );
      case 'transactions':
        return (
          <Transactions
            exporter={selectedExporter}
            onViewTransaction={navigateToTransaction}
          />
        );
      case 'transaction-detail':
        return (
          <TransactionDetail
            transactionId={selectedTransactionId}
            onBack={() => setCurrentPage('transactions')}
            onRefresh={loadSummary}
          />
        );
      case 'firc':
        return <FIRCTracker exporter={selectedExporter} />;
      case 'fraud':
        return <FraudBrain exporter={selectedExporter} />;
      case 'compliance':
        return <Compliance exporter={selectedExporter} />;
      default:
        return <Dashboard summary={summary} exporter={selectedExporter} />;
    }
  }

  return (
    <div className="app-layout">
      <Sidebar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        summary={summary}
        exporter={selectedExporter}
        exporters={exporters}
        onExporterChange={setSelectedExporter}
        theme={theme}
        onThemeToggle={toggleTheme}
      />
      <main className="main-content">
        <TopHeader exporter={selectedExporter} theme={theme} />
        <div className="content-inner">
          {renderPage()}
        </div>
      </main>
    </div>
  );
}
