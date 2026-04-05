import React from 'react';
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx';
import Dashboard from './Dashboard.jsx';
import Transactions from './Transactions.jsx';
import Customers from './Customers.jsx';
import Settlement from './Settlement.jsx';
import VirtualAccounts from './VirtualAccounts.jsx';
import Payouts from './Payouts.jsx';
import Settings from './Settings.jsx';
import { CurrencyProvider } from './CurrencyContext.jsx';

function App() {
  return (
    <CurrencyProvider>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
            <Dashboard />
          </main>
        </div>
      </div>
    </CurrencyProvider>
  );
}

export default App;
