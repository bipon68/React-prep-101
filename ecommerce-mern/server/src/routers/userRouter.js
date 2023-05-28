const express = require('express');
const { getUsers, getUser } = require('../controller/userController');
const userRouter = express.Router();


const users = [
    {id: 1, name: 'Bipon Biswas'},
    {id: 2, name: 'Sajib Biswas'},
    {id: 3, name: 'Mead Ahmed Fahim'},
]

// GET: /api/users
userRouter.get("/", getUsers);
userRouter.get('/:id', getUser)


// userRouter.get("/profile", (req, res) => {
//     res.status(200).send({
//         message: 'User profile is returned',
//     })
// })

module.exports = {userRouter}