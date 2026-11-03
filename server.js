require('dotenv').config();
const express = require('express');

const authRoutes = require('./src/routes/authRoutes');
const employeeRoutes = require('./src/routes/employeeRoutes');

const app = express();

app.use(express.json()); // Middleware to convert incoming JSON string into JS Object.

app.use('/auth', authRoutes); // https://domain.com/auth/login
app.use('/employee', employeeRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});