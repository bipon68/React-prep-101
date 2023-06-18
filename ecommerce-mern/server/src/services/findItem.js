const createHttpError = require("http-errors");
const  mongoose = require("mongoose");
const User = require("../models/userModel");

const findWithId = async (id, options = {}) => {

    
    const item = await User.findById(id, options)

    try {
        if(!item){
            throw createHttpError(404, 'Item does not exist with this id')
            }
        
        return item;
        
    } catch (error) {
        if(error instanceof mongoose.Error){
            throw createError(400, 'Invalid item id');
        }
        throw error;
    }


}

module.exports = {findWithId}