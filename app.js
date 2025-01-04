const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');
const path = require('path');
const app = express();

// Set up EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/expenses', expenseRoutes);

// Home Route
app.get('/', (req, res) => {
  res.redirect('/expenses');
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
