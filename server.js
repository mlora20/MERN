const express = require ('express');
const app = express();
app.get('/',(req,res)=>{
    res.end('Hola server')
})

//configurar server basico
app.listen(5000,function(){
    console.log('el servidor esta corrents')
})