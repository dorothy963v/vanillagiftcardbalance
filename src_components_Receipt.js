import React from 'react';
import './Receipt.css';

function Receipt() {
  const receiptData = {
    date: '2024-08-30',
    total: 80,
    items: [
      { description: 'Groceries', amount: 50 },
      { description: 'Gas', amount: 30 },
    ],
  };

  return (
    <div className="Receipt">
      <h2>Receipt</h2>
      <p>Date: {receiptData.date}</p>
      <ul>
        {receiptData.items.map((item, index) => (
          <li key={index}>
            {item.description}: ${item.amount}
          </li>
        ))}
      </ul>
      <p>Total: ${receiptData.total}</p>
    </div>
  );
}

export default Receipt;
