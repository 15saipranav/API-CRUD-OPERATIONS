const express= require ('express');
const mongoose= require ('mongoose');
const url  = 'mongodb://localhost/userDatabase'

const app = express( );

mongoose.connect(url, {useNewUrlParser:true});

const connectionObject = mongoose.connection

app.use(express.json())

const userRouting = require('../chat-appliccation/routers/routes')

app.use('/routes', userRouting)


connectionObject.on('open',function(){
    console.log('database is connected')
})


app.listen(9000, function(){
    console.log('server is started')
})