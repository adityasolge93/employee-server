require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const employeeRoutes = require('./src/routes/employeeRoutes');

mongoose.connect(process.env.MONGODB_CONNECTION_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch((error) => console.log('Error connecting to MongoDB: ', error));

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true
};

const app = express();

app.use(cors(corsOptions));
app.use(express.json()); // Middleware to convert incoming JSON string into JS Object.
app.use(cookieParser());

app.use('/auth', authRoutes); // https://domain.com/auth/login
app.use('/employee', employeeRoutes);

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});