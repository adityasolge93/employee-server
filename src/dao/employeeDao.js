const Employee =  require('../model/employee');

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
        return await Employee.findOne({ _id: id });
    },

    getEmployeeByEmail: async (email) => {
        return await Employee.findOne({ email: email });
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