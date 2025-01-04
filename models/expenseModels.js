const mysql = require('mysql2');

// Creating a connection pool to the database
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '11303011',  // Replace this with your database password
  database: 'expense_tracker'
});

module.exports = {
  // Get all expenses
  getAllExpenses: (callback) => {
    db.query('SELECT * FROM expenses', (err, results) => {
      if (err) return callback(err);
      callback(null, results);
    });
  },

  // Add a new expense
  addExpense: (expense, callback) => {
    const { amount, description, category } = expense;
    db.query(
      'INSERT INTO expenses (amount, description, category) VALUES (?, ?, ?)', 
      [amount, description, category], 
      (err) => {
        if (err) return callback(err);
        callback(null);
      }
    );
  },

  // Delete an expense by ID
  deleteExpense: (id, callback) => {
    db.query('DELETE FROM expenses WHERE id = ?', [id], (err) => {
      if (err) return callback(err);
      callback(null);
    });
  },

  // Get an expense by its ID
  getExpenseById: (id, callback) => {
    db.query('SELECT * FROM expenses WHERE id = ?', [id], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  },

  // Update an expense by its ID
  updateExpense: (id, updatedExpense, callback) => {
    const { amount, description, category } = updatedExpense;
    db.query(
      'UPDATE expenses SET amount = ?, description = ?, category = ? WHERE id = ?', 
      [amount, description, category, id], 
      (err) => {
        if (err) return callback(err);
        callback(null);
      }
    );
  }
};
