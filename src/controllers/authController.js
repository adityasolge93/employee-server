const employeeDao = require('../dao/employeeDao');

const authController = {
    login: async (request, response) => {
        const { email, password } = request.body;

        try {
            const employee = await employeeDao.getEmployeeByEmail(email);
            if (employee?.email === email && employee?.password === password) {
                return response.status(200).json({
                    message: "User authenticated successfully",
                    user: {
                        name: employee.name,
                        email: employee.email,
                    }
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