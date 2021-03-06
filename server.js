const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const {save_user_information} = require('./models/server_db')

app.use(bodyParser.json());

app.post('/', async (req, res) => {
    var email = req.body.email;
    var amount = req.body.amount;

    if(amount <= 1){
        return_info = {};
        return_info.error = true;
        return_info.messahe = "The amount should be greater than 1"
        return res.send(return_info);
    }

    var result = await save_user_information({"amount": amount, "email": email});

    res.send(result);
})

app.listen(3000,()=>{
    console.log('Running on Port 3000');
})