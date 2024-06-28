import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from 'axios';
import { useEffect, useState } from "react";

const Users = () => { // functional component(Users) - parent component
    const [users, setUsers] = useState([]);
    const [submitted, setSubmited] = useState(false);


    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = () => {
        Axios.get('http://localhost:3001/api/users')
            .then(response => {
                setUsers(response.data?.response || []);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            })
    };

    const addUser = (data) =>{
        setSubmited(true);

        const payload = {
            id: data.id,
            name: data.name,
        }
        Axios.post('http://localhost:3001/api/createuser', payload)
            .then(() => {
                getUsers();
                setSubmited(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            })
    }

    const updateUser = (data) => {
        setSubmited(true);

        const payload = {
            id: data.id,
            name: data.name,
        }

        Axios.put('http://localhost:3001/api/updateuser', payload)
            .then(() => {
                getUsers();
                setSubmited(false);
                isEdit(false);
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            })
    }

    const deleteUser = (data) => {

        Axios.post('http://localhost:3001/api/deleteuser', data)
            .then(() => {
                getUsers();
            })
            .catch(error => {
                console.error("Axios Error : ", error);
            })
    }

    return (
        <Box
            sx={{
                width: 'calc(100% - 100px)',
                margin: 'auto',
                marginTop: '100px'
            }}
        >
            <UserForm 
                addUser={addUser}
                submitted={submitted}
                />
            <UsersTable rows={users} />
        </Box> //child components
    );
}

export default Users;
