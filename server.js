// const express = require('express');
// const bodyParser = require('body-parser');
import express from 'express';
import bodyParser from 'body-parser';
import connectToMongo from './Backend/db.js';

// const connectToMongo = require('./db.js');
connectToMongo();

// var User = require('./models/User');
// var Org = require('./models/organisation');
// var alumni = require('./models/alumni');

const port = 3010;

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.get('/',function(req,res){
    res.send("I am alive");
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})