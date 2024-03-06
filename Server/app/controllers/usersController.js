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
    res.send('create new user');
}

export default {
    getAllUsersInfor,
    deleteAllUsers,
    getUserById,
    updateUserInfor,
    deleteUser,
    createNewUser,
};
