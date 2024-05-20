
const swaggerExpress = require('swagger-ui-express')

const option={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Node js Project For Mysql',
            version:'1.0.0'
        },
        servers:[
            {
                url:'http://localhost:4500/'
            }
        ]
    },
    apis:['./Routes/Student_det']
}

/**
 * @swagger
 * /:
 *  get:
 *      summary:This api method is working or not
 *      description:This api method is working or not
 *      responses:
 *          200:
 *              description:to test method
*/

module.exports = option
