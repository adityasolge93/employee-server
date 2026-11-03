const db = require('./inmemorydb');
const { v4: uuidv4 } = require('uuid');

const employeeDao = {
    create: (data) => {
        const id = uuidv4();

        const employee = {
            id: id,
            name: data.name,
            email: data.email,
            role: data.role
        };

        db.employees[id] = employee;

        return id;
    },

    getEmployee: (id) => {
        return db.employees[id] || null;
    },

    /**
     * Rest of the methods are practice problems
     */
    getEmployees: () => {

    },

    searchEmployee: (searchString) => {

    },

    deleteEmployee: (id) => {

    },

    updateEmployee: (data) => {

    }
};

module.exports = employeeDao;