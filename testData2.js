let mysql = require("mysql");
let connData = {
    host : "localhost",
    user : "root",
    password:"",
    database:"ShivamGupta",
};

let productsData = [];

    let connection = mysql.createConnection(connData);
    let sql = "SELECT * FROM products";
    connection.query(sql,function(err,result){
        if(err) console.log("Error in Database",err.message);
        else {
            productsData.push(result);
        }
    })

module.exports.productsData = productsData;