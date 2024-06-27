const { response } = require('express');
const User = require('./model');

//create get user
const getUsers = (req, res, next) => {
    User.find()
        .then(response => {
            res.json({ response })
        })
        .catch(error => {
            res.json({ message: error})
        })
};

//create add user
const addUser = (req, res, next) =>{
    const user = new User({
        id: req.body.id,
        name: req.body.name,
    });
    user.save()
    .then(response => {
        res.json({ response })
    })
    .catch(error => {
        res.json({ error })
    });
}





exports.getUsers = getUsers;
exports.getUserById = getUserById;