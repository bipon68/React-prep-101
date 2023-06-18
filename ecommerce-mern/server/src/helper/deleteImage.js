const fs = require('fs').promises;

const deleteImage = async (userImagePath) => {

    try {
        await fs.access(userImagePath);
        await fs.unlink(userImagePath);
        await console.log('User image was deleted');
        
    } catch (error) {
        console.error('User image does not exist')
    }

    // fs.access(userImagePath)
    //         .then(() => fs.unlink(userImagePath))
    //         .then(() => fs.unlink(userImagePath))
    //         .then((err) =>console.log('User image was deleted'))
}

module.exports = {deleteImage}