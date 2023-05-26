require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbURL = process.env.MONGODBDB_ATLAS_URL || 'mongodb://localhost:27017/commerceMernDB';



module.exports = {serverPort, mongodbURL}