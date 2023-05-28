const createHttpError = require("http-errors");
const  mongoose = require("mongoose");
const User = require("../models/userModel");

const findUserById = async (id) => {

    const options = {password: 0};
    const user = await User.findById(id, options)

    try {
        if(!user){
            throw createHttpError(404, 'User does not exist with this id')
            }
        
        return user;
        
    } catch (error) {
        if(error instanceof mongoose.Error){
            throw createError(400, 'Invalid user id');
        }
        throw error;
    }


}

module.exports = {findUserById}