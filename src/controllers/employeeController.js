const employeeDao = require('../dao/employeeDao');

const employeeController = {
    create: async (request, response) => {
        const { name, email, role, password } = request.body;

        if (!name || !email || !role || !password) {
            return response.status(400).json({
                message: 'Name, Email, Role, Password are mandatory fields'
            });
        }

        const id = await employeeDao.create({ name, email, role, password });

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

    getAllEmployees: async (request, response) => {
        // Add proper validation on limit
        const page  = parseInt(request.query.page) || 1;
        const limit = parseInt(request.query.limit) || 10;
        const skip = (page - 1) * limit;

        try {
            const { employees, totalCount } = await employeeDao.getEmployees(skip, limit);
            return response.status(200).json({
                employees: employees,
                pagination: {
                    totalItems: totalCount,
                    totalPages: Math.ceil(totalCount/limit),
                    currentPage: page,
                    itemsPerPage: limit
                }
            });
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                message: 'Internal Server Error'
            });
        }
    },

    // Implement other controller methods here
}

module.exports = employeeController;