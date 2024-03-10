const User = require('../')

async function getAllUsersInfor(req, res) {
    res.send('get all users infor');
}

async function deleteAllUsers(req, res) {
    res.send('delete all users ');
}

async function getUserById(req, res) {
    res.send('get user by id');
}

async function updateUserInfor(req, res) {
    res.send('update user infor');
}

async function deleteUser(req, res) {
    res.send('deleteUser');
}

async function createNewUser(req, res) {
    try {
        const newUser = {
            ...req.body
        }

    } catch (error) {
        res.status(400).send({
            message: "can not create new user"
        })
    }
}

module.exports = {
    getAllUsersInfor,
    deleteAllUsers,
    getUserById,
    updateUserInfor,
    deleteUser,
    createNewUser,
};
