const { student_data_get } = require('../Controller/Student_det')

const route = require('express').Router()


/**
 * @swagger
 * components:
 *   schemas:
 *      emp:
 *          type: oblect
 *          properties:
 */

/**
 * @swagger
 * /api/student/data/get:
 *  get:
 *      summary:This api method is working or not
 *      description:This api method is working or not
 *      responses:
 *          200:
 *              description:to test method
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#/components/schemas/emp
*/

route.get('/api/student/data/get', student_data_get)

module.exports = {route}