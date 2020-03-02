var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

function logIn(email, pass, callback) {

    var sql = 'SELECT * FROM `User` WHERE email = "' + email + '" AND password = "' + pass + '"';
    connection.query(sql, function (error, results, fields) {
        if (error) {
            console.log(error.code);
            return callback(false);
        }
        else {
            if (results.length == 0) {
                return callback(false);
            } else {

                loadUser(results[0].id, results[0].email, results[0].name, results[0].last_name, results[0].job);

                return callback(true);
            }
        }
    });

}

function logOut() {
    removeUser();
    location.href = "./login.html";
}


function getAllUsers(callback) {

    var sql = 'SELECT * FROM `User`';
    connection.query(sql, function (error, results) {
        if (error) {
            console.log(error.code);
        }
        else {
            if (results.length == 0) {
                console.log("Error!");
            } else {

                return callback(results);
            }
        }
    });

}

function getUser(id, callback) {

    var sql = 'SELECT * FROM `User` WHERE id = "' + id + '"';
    connection.query(sql, function (error, results) {
        if (error) {
            console.log(error.code);
            return callback(null);
        }
        else {
            if (results.length == 0) {
                return callback(null);
            } else {

                return callback([results[0].id, results[0].email, results[0].name, results[0].last_name, results[0].job]);
            }
        }
    });
}

function insertUser(id, email, pass, name, last_name, job, callback){

    var sql = 'INSERT INTO `user`(`id`, `email`, `password`, `name`, `last_name`, `job`) VALUES ("' 
    + id + '","' + email + '","' + pass + '","' + name + '","' + last_name + '","' + job + '")';
    connection.query(sql, function (error, results) {
     if (error) {
         console.log(error.code);
         return callback(false);
     }
     else {
         if(results.length == 0){
            return callback(false);
         }else{
            return callback(true);
         }
     }
    });

}

function deleteUser(id, callback){

    var sql = 'DELETE FROM `user` WHERE id="' + id + '"';
    connection.query(sql, function (error, results) {
     if (error) {
         console.log(error.code);
         return callback(false);
     }
     else {
         if(results.length == 0){
            return callback(false);
         }else{
            return callback(true);
         }
     }
    });

}