const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"))

app.get("/test", (req, res) => {
    res.status(200).send({
        message: 'Welcome to Jungle'
    })
})
app.post("/test", (req, res) => {
    res.status(200).send({
        message: 'post: Welcome to Post method'
    })
})
app.put("/test", (req, res) => {
    res.status(200).send({
        message: 'put: Welcome to put method'
    })
})
app.delete("/test", (req, res) => {
    res.status(200).send({
        message: 'delete: Welcome to delete method'
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