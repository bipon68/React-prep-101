const express = require('express');
const { getUsers, getUserById, deleteUserById, processRegister } = require('../controller/userController');
const userRouter = express.Router();


const users = [
    {id: 1, name: 'Bipon Biswas'},
    {id: 2, name: 'Sajib Biswas'},
    {id: 3, name: 'Mead Ahmed Fahim'},
]

// GET: /api/users
userRouter.post("/process-register", processRegister);
userRouter.get("/", getUsers);
userRouter.get('/:id', getUserById)
userRouter.delete('/:id', deleteUserById)


// userRouter.get("/profile", (req, res) => {
//     res.status(200).send({
//         message: 'User profile is returned',
//     })
// })

module.exports = {userRouter}