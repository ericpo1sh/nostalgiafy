const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Nostalgiafy_API',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      {
        url: 'https://nostalgiafy.onrender.com/',
      },
    ],
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
