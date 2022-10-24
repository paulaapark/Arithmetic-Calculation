const express = require('express');
const app = express();
const arithmeticFunctions = require('./arithmeticFunctions');
app.use(express.urlencoded({extended: false}));




app.listen(3000, function(){
    console.log('Server running on port 3000...')
});