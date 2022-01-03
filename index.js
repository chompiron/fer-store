const express = require('express');
const route = require('./routes');

const app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.use((req, res, next) =>{
    const fecha = new Date();
    res.locals.years = fecha.getFullYear();
    next();
})


app.use('/', route())

const puerto = 3000;
app.listen(puerto, ()=>{
    console.log(`Corre en ${puerto}`)
})


