const express= require('express');
const app=express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

//MIDDLEWARES
const postRoute=require('./routes/post')
app.use('/',postRoute);


//RUTAS


//CONECTARSE A LA BASE DE DATOS
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true },
()=>{
   console.log( "Estas conectada a la base de datos bieibi")
})

//ESCUCHAR EL SERVIDOR

app.listen(3000);