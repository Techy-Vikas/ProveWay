import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Video File Handling Apis',
      description: 'Video File Handling Apis',
      version: 'v1',
      contact: {
        name: 'Vikas Chauhan',
        email: 'vikaschauhan98765@gmail.com'
      }
    },
    basePath: '/api',
    securityDefinitions: {
      bearerAuth: {
        type: 'apiKey',
        name: 'authorization',
        scheme: 'bearer',
        in: 'header'
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ['./src/routes/*.js']
}

const swaggerSpec = swaggerJsdoc(swaggerOptions)

function swaggerDocs(app) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

export default swaggerDocs
