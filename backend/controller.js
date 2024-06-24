const users = [{
    id: 1,
    name: 'Udari',
},
{
    id: 1,
    name: 'Udari',
}];

const getUsers = (cb) => {
    cb(users);
};

const getUserById = (id, cb) =>{
    const user = users.find(user => user.id == id);
    cb(user);
};

