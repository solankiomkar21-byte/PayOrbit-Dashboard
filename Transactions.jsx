import React from 'react';

export default function Transactions() {
  const dummyTransactions = [
    { id: 'TX-1002', date: '2025-04-01', amount: '$4,200', status: 'Settled', method: 'Wire' },
    { id: 'TX-1003', date: '2025-04-02', amount: '$1,500', status: 'Pending', method: 'Card' },
    { id: 'TX-1004', date: '2025-04-03', amount: '$9,800', status: 'Blocked', method: 'ACH' },
  ];

  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">Global Transactions</h2>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {dummyTransactions.map(tx => (
            <tr key={tx.id}>
              <td>{tx.id}</td>
              <td>{tx.date}</td>
              <td style={{ fontWeight: 'bold' }}>{tx.amount}</td>
              <td>{tx.method}</td>
              <td><span className={`badge badge-${tx.status === 'Settled' ? 'green' : tx.status === 'Pending' ? 'blue' : 'red'}`}>{tx.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
