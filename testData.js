let mysql = require("mysql");
let connData = {
    host : "localhost",
    user : "root",
    password:"",
    database:"ShivamGupta",
};

let shopsData = [];

    let connection = mysql.createConnection(connData);
    let sql = "SELECT * FROM shops";
    connection.query(sql,function(err,result){
        if(err) console.log("Error in Database",err.message);
        else {
            shopsData.push(result);
        }
    })

module.exports.shopsData = shopsData;