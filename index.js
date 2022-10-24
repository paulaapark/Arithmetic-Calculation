const express = require('express');
const app = express();
const arithmeticFunctions = require('./arithmeticFunctions');
app.use(express.urlencoded({extended: false}));

let 

app.get('/', function(req, res){
    console.log(req.query);

    res.send('Arithmetic Calculation');
})

app.post('/', function(req, res){
    // students.push(req.body);
    // res.redirect('/');
    const calculator = {
        Operation: req.body.Operation, 
        Value_1: req.body.Value_1,
        Value_2: req.body.Value_2
    };


    console.log('Operation: req.body.Operation, Value 1: ${Value_1} Value 2: ${Value_2} ')
});

app.listen(3000, function(){
    console.log('Server running on port 3000...')
});