import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = [
    { id: 1, description: 'Groceries', amount: 50 },
    { id: 2, description: 'Gas', amount: 30 },
  ];

  return (
    <div className="ExpenseList">
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
