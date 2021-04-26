const express = require('express');
const router = require('./src/routes');

const app = express();

app.use(router);

app.listen(4000, ()=>{
  console.log('Escuchando en el puerto 4000');
})
