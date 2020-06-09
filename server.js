const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

//configs
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

app.use(cors());
app.use(express.json()); //permitir arquivo json

//db connect
mongoose.connect(process.env.MONGODB,{useNewUrlParser: true, useUnifiedTopology: true});

//models
requireDir('./src/models');

//webSocket - moddleware - toda requisição vai utilizar Socket.io agora
app.use((req, res, next) => {
    req.io = io;
    next();
})

//routes
app.use('/api', require('./src/routes'));

server.listen(process.env.PORT || 3002);
console.log('server is listening on port 3002');