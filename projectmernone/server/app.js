const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});
// importing connectionDB file
require('./db/connectionDB');
// importing User schema 
const User = require('./model/userSchema');

const PORT = process.env.PORT;

//Middleware...

const middlewareone = (req,res,next) => {
     console.log('Hello welcome to middleware');
     next();
}

// middlewareone();

app.get('/', (req,res) => {
   res.send('Hello world from the express server - Home Page');
});

app.get('/about', middlewareone,  (req,res) => {
   console.log('Inside about page');
    res.send('welcome to About page');
 });

 app.get('/contact', (req,res) => {
    res.send('welcome to Contact page');
 });

 app.get('/signin', (req,res) => {
    res.send('welcome to Login page');
 });

 app.get('/signup', (req,res) => {
    res.send('welcome to Register page');
 });


app.listen(PORT, () => {
    console.log(`Server is running at port - ${PORT}`);
})