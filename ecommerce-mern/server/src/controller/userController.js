const createError = require('http-errors');
const fs = require('fs').promises;
const  mongoose = require('mongoose');
const { deleteImage } = require('../helper/deleteImage');
const User = require('../models/userModel');
const { findWithId } = require('../services/findItem');
const { successResponse } = require('./responseController');

const getUsers = async (req, res, next) => {
    try {
        // search functionality 
        const search = req.query.search || "";
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const searchRegExp = new RegExp('.*' + search + '.*', 'i');
        const filter = {
            isAdmin: {$ne: true},
            $or: [
                {name: {$regex: searchRegExp}},
                {email: {$regex: searchRegExp}},
                {phone: {$regex: searchRegExp}}
            ]
        };
        const options = {password: 0}

        const users = await User.find(filter, options).limit(limit).skip((page - 1) * limit); 
         // skip - (3-1) * 5 = 2*5 = 10 // 10 user skip

        const count = await User.find(filter).countDocuments();

        if(!users) throw createError(404, "No users found");

        // res.status(200).send({
        //     message: 'User were retunred',
        //     users,
        //     pagination: {
        //         totalPages: Math.ceil(count / limit),
        //         currentPage: page,
        //         previousPage: page - 1 > 0 ? page - 1 : null,
        //         nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,

        //     }
        // })

        return successResponse(res, {
            statusCode: 200,
            message: 'User were returned successfully',
            payload: {
                users,
                pagination: {
                    totalPages: Math.ceil(count / limit),
                    currentPage: page,
                    previousPage: page - 1 > 0 ? page - 1 : null,
                    nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,

                }
            }
        })

    } catch (error) {
        next(error)
    }
}

const getUserById = async (req, res, next) => {
    try {
       const id = req.params.id;
       const options = {password: 0};
    //    const options = {password: 0};
    //    const user = await User.findById(id, options)

    //    if(!user){
    //     throw createError(404, 'User does not exist with this id')
    //     }

    const user = await findWithId(User, id, options);

        return successResponse(res, {
            statusCode: 200,
            message: 'User were returned successfully',
            payload: {
                user
            }
        })
   

    } catch (error) {
        // if(error instanceof mongoose.Error){
        //     next(createError(400, 'Invalid user id'));
        //     return;
        // }
        next(error)
    }
}

const deleteUserById = async (req, res, next) => {
    try {
       const id = req.params.id;
       const options = {password: 0};

        const user = await findWithId(User, id, options);


        const userImagePath = user.image;

        deleteImage(userImagePath)

        // fs.access(userImagePath, (err) => {
        //     if(err){
        //         console.error('User image does not exist')
        //     }else{
        //         fs.unlink(userImagePath, (err) => {
        //             if(err) throw err;
        //             console.log("User was deleted")
        //         })
        //     }
        // })

        await User.findByIdAndDelete({_id: id, isAdmin: false})

        return successResponse(res, {
            statusCode: 200,
            message: 'User was deleted successfully',
        })
   

    } catch (error) {
        next(error)
    }
}

module.exports = { getUsers, getUserById, deleteUserById}