const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test');

const bd = mongoose.connection;
bd.on('connected',()=>{console.log('conexion a bd Mongo')});
bd.on('error',()=>{console.log('error a bd Mongo')});

module.exports = mongoose;