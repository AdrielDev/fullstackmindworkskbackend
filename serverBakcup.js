/*
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const server = express();
const requireDir = require('require-dir');

//configs
server.use(cors());
server.use(express.json()); //permitir arquivo json

//db connect
mongoose.connect('mongodb+srv://admin:admin@cluster0-dpg1k.mongodb.net/integraGit?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//models
requireDir('./src/models');

//routes
server.use('/api', require('./src/routes'));

server.listen(3002);
console.log('server is listening on port 3002');
*/