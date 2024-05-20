const conn = require('../Modle/modle')

const student_data_get = (req, res) =>{
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
}

module.exports = {student_data_get}