//Setting up variables for environment
var express = require('express');
var app = express();
var path = require('path');

// Views directory as template files
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs'); // EJS Templating Engine

// Express to Serve Static assets
app.use(express.static(path.join(__dirname, 'public')));

// Setting up Routes
app.get('/',(req,res)=>{
    res.render('index');
})

// Setting up the NodeJS Server
app.listen(3000);
console.log('Server is Running in Port 3000');