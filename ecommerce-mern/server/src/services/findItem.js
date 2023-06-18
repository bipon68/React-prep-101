const createHttpError = require("http-errors");
const  mongoose = require("mongoose");
// const User = require("../models/userModel");

const findWithId = async (Model, id, options = {}) => {

    
    try {
        const item = await Model.findById(Model, id, options)

        if(!item){
            throw createHttpError(404, `${Model.modelName} does not exist with this id`)
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