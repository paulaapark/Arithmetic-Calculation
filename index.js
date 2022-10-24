const express = require('express');
const app = express();
const arithmeticFunctions = require('./arithmeticFunctions');
app.use(express.urlencoded({extended: false}));


app.get('/', function(req, res){
    console.log(req.query);
    res.send('Arithmetic Calculator');
});

app.post('/', function(req, res){
    let data = {
        Operation: req.body.Operation, 
        Value_1: req.body.Value_1,
        Value_2: req.body.Value_2,
    };

    if(data.Operation == 'add'){
        let Result = arithmeticFunctions.add(parseInt(data.Value_1), parseInt(data.Value_2));
        res.send(
            `Operation: Addition 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        console.log(
            `Operation: Addition 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        return;
    };

    if(data.Operation == 'sub'){
        let Result = arithmeticFunctions.sub(parseInt(data.Value_1), parseInt(data.Value_2));
        res.send(
            `Operation: Subtraction 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        console.log(
            `Operation: Subtraction 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        return;
    };
    
    if(data.Operation == 'mul'){
        let Result = arithmeticFunctions.multiply(parseInt(data.Value_1), parseInt(data.Value_2));
        res.send(
            `Operation: Multiplication 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        console.log(
            `Operation: Multiplication 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        return;
    }; 
    
    if(data.Operation == 'div'){
        let Result = arithmeticFunctions.divide(parseInt(data.Value_1), parseInt(data.Value_2));
        res.send(
            `Operation: Division 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        console.log(
            `Operation: Division 
            Value 1: ${data.Value_1} 
            Value 2: ${data.Value_2} 
            Result: ${Result}`);
        return;
    };  

    res.redirect('/');
});

app.listen(3000, function(){
    console.log('Server running on port 3000...')
});