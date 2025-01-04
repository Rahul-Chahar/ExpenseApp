const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseControllers');

router.get('/', expenseController.getExpenses);
router.post('/', expenseController.createExpense);
router.post('/delete/:id', expenseController.deleteExpense);
router.get('/edit/:id', expenseController.getEditExpense)
router.post('/update/:id', expenseController.updateExpense);

module.exports = router;