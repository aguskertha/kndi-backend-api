const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'KNDI Backend API',
            description: 'KNDI data for information',
            contact: {
                name: "Toruck Dev"
            }
        },
        servers: [
            {
                url: 'http://localhost:5000'
            }
        ]
    },
    apis: ['./routes/*.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {
    swaggerDocs,
    swaggerUi
}