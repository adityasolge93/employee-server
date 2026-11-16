const jwt = require('jsonwebtoken');

const authMiddleware = {
    protect: async (request, response, next) => {
        try {
            const token = request.cookies?.jwtToken;

            if (!token) {
                return response.status(401).json({
                    message: 'Unauthorized access'
                });
            }

            try {
                const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
                request.user = data;
                next();
            } catch (error) {
                return response.status(401).json({
                    message: 'Unauthorized access'
                });
            }
        } catch (error) {
            return response.status(500).json({
                message: 'Error processing request'
            });
        }
    },
};

module.exports = authMiddleware;