const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

const isLoggedIn = (req, res, next) => {
    // console.log('isLoggedIn middleware');
    const login = true;
    if(login){
        req.body.id = 101
        next();
    }else{
        return res.status(401).json({message: 'Please login first'})
    }
}

app.get("/test", (req, res) => {
    res.status(200).send({
        message: 'Welcome to Jungle'
    })
})
app.get("/api/user", isLoggedIn, (req, res) => {
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

app.listen(3001, () => {
    console.log(`Server running at localhost://3001`)
})