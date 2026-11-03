const employeeDao = require('../dao/employeeDao');

const employeeController = {
    create: async (request, response) => {
        const { name, email, role } = request.body;

        if (!name || !email || !role) {
            return response.status(400).json({
                message: 'Name, Email, Role are mandatory fields'
            });
        }

        const id = employeeDao.create({ name, email, role });

        return response.status(200).json({
            message: `Employee data saved with employee id: ${id}`
        });
    },

    getEmployeeById: async (request, response) => {
        const { id } = request.params;

        const employee = employeeDao.getEmployee(id);

        if (employee) {
            return response.status(200).json({ data: employee });
        } else {
            return response.status(400).json({ 
                message: `Employee with id ${id} does not exist`
            });
        }
    },

    // Implement other controller methods here
}

module.exports = employeeController;