const authController = {
    login: async (request, response) => {
        const { email, password } = request.body;

        if (email === 'test@test.com' && password === 'test') {
            return response.status(200).json({ 
                message: "User authenticated successfully",
                user: {
                    name: "John Cena",
                    age: 30,
                    email: email,
                }
            });
        } else {
            return response.status(400).json({
                message: 'Invalid credentials'
            });
        }
    }
};

module.exports = authController;