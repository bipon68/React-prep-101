require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3002;
const mongodbURL = process.env.MONGODBDB_ATLAS_URL || 'mongodb://localhost:27017/commerceMernDB';

const defaultImagePath = process.env.DEFAULT_USER_IMAGE_PATH || 'public/images/users/default.png';
const jwtActivationKey = process.env.JWT_ACTIVATION_KEY || 'mangobar';

module.exports = {serverPort, mongodbURL, defaultImagePath, jwtActivationKey}