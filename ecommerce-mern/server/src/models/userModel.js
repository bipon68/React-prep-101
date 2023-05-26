
const {Schema, model} = require("mongoose")
const bcrypt = require('bcrypt')
const { defaultImagePath } = require("../secret")

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'User name is required'],
        trim: true,
        maxlength: [31, 'User name can be max 31 char '],
        minlength: [3, 'Min 3 char']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v){
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            }
        }
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: [6, 'Min 3 char'],
        set: (v) =>  bcrypt.hashSync(v, bcrypt.genSaltSync(10))
    },
    image: {
        type: String,
        default: defaultImagePath
    },
    address: {
        type: String,
        required: [true, 'User address is required'],
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
    },
    isAdmin: {
        type: Boolean,
        default: fasle
    },
    isBanned: {
        type: Boolean,
        default: fasle
    }
}, {timestamps: true})

const User = model('Users', userSchema)



// const users = [
//     {id: 1, name: 'Bipon Biswas'},
//     {id: 2, name: 'Sajib Biswas'},
//     {id: 3, name: 'Mead Ahmed Fahim'},
// ]

// module.exports = {users}


module.exports = {User}