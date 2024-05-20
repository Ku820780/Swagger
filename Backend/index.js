const express = require('express')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerExpress = require('swagger-ui-express')
const conn = require('./Modle/modle')
// const option = require('./Swagger/Swagger')
const app = express()
app.use(express.json())

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
    apis:['./index.js']
}
const swaggerSpac = swaggerJsdoc(option)
app.use('/api/docs', swaggerExpress.serve, swaggerExpress.setup(swaggerSpac))

/**
 * @swagger
 * /:
 *  get:
 *      summary: This api method is working or not
 *      description: This api method is working or not
 *      responses:
 *          200:
 *              description: to test method
*/ 

app.get('/', (req, res)=>{
    res.send("hello")
})


// schema

/**
 * @swagger
 *  components:
 *      schemas:
 *          emp:
 *              type: object
 *              properties:
 *                  id:
 *                      type:integer
 *                  name:
 *                      type:string
 *                  email:
 *                      type:string
 *                  contact:
 *                      type:string
 */




/**
 * @swagger
 * /api/get/:
 *  get:
 *      summary: This api is Student Details
 *      description: This api method is working
 *      responses:
 *          200:
 *              description: This Is proper Working
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/emp'
 */



app.get('/api/get/',(req, res) =>{
    const sql = `SELECT * FROM emp`
    conn.query(sql, (err, result)=>{
        if(err){
            res.status(400).json(err)
            console.log("Data Not get")
        }else{
            res.status(200).json(result)
            console.log("Data Get SuccessFully..")
        }
    })
})

/**
 * @swagger
 * /api/get/Byid/{id}:
 *  get:
 *      summary: Get Data By Id
 *      description: This api method is working
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: Numberic Id required
 *              schema:
 *                  type: integer
 *      responses:
 *          200:
 *              description: This Is proper Working
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/emp'
 */

app.get('/api/get/Byid/:id',(req, res) =>{
    const id = req.params.id
    const sql = `SELECT * FROM emp WHERE id=?`
    conn.query(sql,id, (err, result)=>{
        if(err){
            res.status(400).json(err)
            console.log("Data Not get")
        }else{
            res.status(200).json(result)
            console.log("Data Get SuccessFully..")
        }
    })
})


//post method 

/**
 * @swagger
 * /api/userdata/post/:
 *  post:
 *      summary: This is Post Method
 *      description: This api method is working
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/emp'
 *      responses:
 *          200:
 *              description: Data Post Sucssfully
 */

app.post('/api/userdata/post/',(req, res)=>{
    const data = req.body;
    const sql = `INSERT INTO emp SET ?`
    conn.query(sql, data,(err, result)=>{
        if(err){
            console.log("Data Not Post")
            res.status(400).json(err)
        }else{
            console.log("Data Post SuccessFully...")
            res.status(200).json(result)
        }
    })
})


//update api

/**
 * @swagger
 * /api/data/update/{id}:
 *  put:
 *      summary: This is Post Method
 *      description: This api method is working
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: Numberic Id required
 *              schema:
 *                  type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/emp'
 *      responses:
 *          200:
 *              description: Data Put Succssfully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              $ref: '#components/schema/emp'
 */

app.put('/api/data/update/:id',(req, res)=>{
    const data = req.body;
    console.log(data)
    const id = req.params.id;
    const sql = `UPDATE emp SET  ? WHERE id =?`
    conn.query(sql, [data, id],(err, result)=>{
        if(err){
            console.log("Data Not Update....")
            res.status(404).json(err)
        }else{
            console.log("Data Update SuccessFully..")
            res.status(200).json(result)
        }
    })
})

//delete Api

/**
 * @swagger
 * /api/user/data/delete/{id}:
 *  delete:
 *      summary: Data Delete from Emp Table
 *      description: This api method is working
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: Numberic Id required
 *              schema:
 *                  type: integer
 *      responses:
 *          200:
 *              description: Data Delete SuccessFully...
 */

app.delete('/api/user/data/delete/:id',(req, res)=>{
    const id = req.params.id;
    const sql = `DELETE FROM emp WHERE id=?`
    conn.query(sql, id,(err, result)=>{
        if(err){
            console.log("Data Not Delete....")
            res.status(404).json(err)
        }else{
            console.log("Data Delete SuccessFully...")
            res.status(200).json(result)
        }
    })
})

app.listen(4500,()=>{
    console.log(`Server Running on 4500`)
})