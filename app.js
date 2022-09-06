const express = require('express');
const app = express();
const path = require('path');

//inport router
const homeRouter = require('./routers/main')

//set engine setup
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//use router
app.use('/', homeRouter);


//port listener
app.listen(3000, () => {
    console.log('Servidor funcionando');
});