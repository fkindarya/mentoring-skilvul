const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sekolah"
})

connection.connect((err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Connected to database")
    }
})

module.exports = connection