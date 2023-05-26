const mongoose = require('mongoose')
const { mongodbURL } = require('../secret')

const connnectDatabase = async (options = {}) => {
    try {
        await mongoose.connect(mongodbURL, options);
        console.log(`Connection to DB is successfully established`);

        mongoose.connection.on('error', (error)=> {
            console.error('DB Connection error: ', error)
        })
    } catch (error) {
        console.error('Could connect to DB : ', error.toString())
    }
}

module.exports = {connnectDatabase}