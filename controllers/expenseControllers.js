const Expense = require('../models/expenseModels');

exports.getExpenses = (req, res) => {
  Expense.getAllExpenses((err, results) => {
    if (err) return res.status(500).send(err);
    res.render('index', { expenses: results });
  });
};

exports.createExpense = (req, res) => {
  const { amount, description, category } = req.body;
  Expense.addExpense({ amount, description, category }, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/expenses');
  });
};

exports.deleteExpense = (req, res) => {
  const { id } = req.params;
  Expense.deleteExpense(id, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/expenses');
  });
};

exports.getEditExpense = (req, res) => {
    const { id } = req.params;
    Expense.getExpenseById(id, (err, expense) => {
      if (err) return res.status(500).send(err);
      res.render('edit', { expense });
    });
  };
  

exports.updateExpense = (req, res) => {
  const { id } = req.params;
  const { amount, description, category } = req.body;
  Expense.updateExpense(id, { amount, description, category }, (err) => {
    if (err) return res.status(500).send(err);
    res.redirect('/expenses');
  });
};
