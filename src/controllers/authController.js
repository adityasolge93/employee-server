const employeeDao = require('../dao/employeeDao');
const jwt = require('jsonwebtoken');

const authController = {
    login: async (request, response) => {
        const { email, password } = request.body;

        try {
            const employee = await employeeDao.getEmployeeByEmail(email);
            if (employee?.email === email && employee?.password === password) {
                const data = {
                    name: employee.name,
                    email: employee.email
                };

                const token = jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
                
                response.cookie('jwtToken', token, {
                    httpOnly: true, // It will be accessible on http requests
                    secure: true, // It will be transmitted only over https methods (localhost is an exception)
                    domain: 'localhost', // The domain which is allowed to access this cookie.
                    path: '/' // Which all paths/routes can access this cookie in the above domain.
                });
                return response.status(200).json({
                    message: "User authenticated successfully",
                    user: data
                });
            } else {
                return response.status(400).json({
                    message: 'Invalid credentials'
                });
            }
        } catch (error) {
            console.log(error);
            return response.status(500).json({ message: 'Unable to login' });
        }
    }
};

module.exports = authController;