const express = require('express');
const app = express();

app.get("/test", (req, res) => {
    res.status(200).send({
        message: 'Welcome to Jungle'
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

app.listen(3001, () => {
    console.log(`Server running at localhost://3001`)
})