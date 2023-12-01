let mysql = require("mysql");
let connData = {
    host : "localhost",
    user : "root",
    password:"",
    database:"ShivamGupta",
};

let purchasesData = [];

    let connection = mysql.createConnection(connData);
    let sql = "SELECT * FROM purchases";
    connection.query(sql,function(err,result){
        if(err) console.log("Error in Database",err.message);
        else {
            purchasesData.push(result);
        }
    })

module.exports.purchasesData = purchasesData;