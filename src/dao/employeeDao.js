const Employee =  require('../model/employee');
const mongoose = require('mongoose');

// DAO: Data Access Object
const employeeDao = {
    create: async (data) => {
        const newEmployee = new Employee(data);

        try {
            await newEmployee.save();
        } catch (error) {
            console.log('Error while saving the employee data to database');
            throw error;
        }
    },

    getEmployee: async (id) => {
        return await Employee.findOne({ _id: mongoose.Types.ObjectId(id) });
    },

    getEmployeeByEmail: async (email) => {
        return await Employee.findOne({ email: email });
    },

    /**
     * Rest of the methods are practice problems
     */
    getEmployees: async (skip = 0, limit = 10) => {
        // Practice Problem: Convert this query into native query.
        const [employees, totalCount] = await Promise.all([
            Employee.find({})
            .sort({ name: -1 })
            .skip(skip)
            .limit(limit),
            
            // Practice Problem: Convert this query into native query.
            Employee.countDocuments({}),
        ]);

        return { employees, totalCount };
    },

    searchEmployee: (searchString) => {

    },

    deleteEmployee: (id) => {

    },

    updateEmployee: (data) => {

    }
};

module.exports = employeeDao;