const createError = require('http-errors');

const getUsers = (req, res, next) => {
    try {
        console.log('Req body id: ', req.body.id);
        res.status(200).send({
            message: 'User were retunred',
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {getUsers}