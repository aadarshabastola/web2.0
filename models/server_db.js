const { response } = require('express');
var db = require('../db.js');

save_user_information = (data) => new Promise((resolve, reject) => {
    db.query('INSERT INTO lottery_information SET ?', data, function (err, results, fields) {
        if (err) {
            reject('Could Not Insert into Lottery Information');
        }
        resolve('Succesful');
    })
})


module.exports = {
    save_user_information
}