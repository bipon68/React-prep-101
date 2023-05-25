const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const createError = require('http-errors')
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

// const isLoggedIn = (req, res, next) => {
//     // console.log('isLoggedIn middleware');
//     const login = true;
//     if(login){
//         req.body.id = 101
//         next();
//     }else{
//         return res.status(401).json({message: 'Please login first'})
//     }
// }

app.get("/test", (req, res) => {
    res.status(200).send({
        message: 'Welcome to Jungle'
    })
})
app.get("/api/user", (req, res) => {
    console.log('Req body id: ', req.body.id);
    res.status(200).send({
        message: 'User profile is retured'
    })
})

app.get("/", (req, res) => {
    res.status(200).send({
        message: 'Welcome to My Home'
    })
})

app.get("/products", (req, res) => {
    res.status(200).send({
        message: 'Products are retured.'
    })
})

// client error handling
app.use((req, res, next) =>{
    // res.status(404).json({message: 'route not found'})
    next(createError(404, 'Route not found'));
})

// server error handling -> all the errors
app.use((err, req, res, next) =>{
    return res.status(err.status || 500).json({
        success: false,
        message: err.message
    })
})

module.exports = app;