const mysql = require('mysql')

const conn = mysql.createConnection({
    user:'root',
    host:'localhost',
    port:3306,
    password:'',
    database:'student'
})

conn.connect((err)=>{
    if(err){
        console.log("DataBase Not Connect")
    }else{
        console.log("DataBase Connect SuccessFully...")
    }
})

module.exports = conn