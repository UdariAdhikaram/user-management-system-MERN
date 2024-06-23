import { Box } from "@mui/material";
import UserForm from "./UserForm"
import UsersTable from "./UsersTable";

const users = [
{
    id: 1,
    name: 'Udari'
},
{
    id: 2,
    name: 'Isuru'
}
];

const Users = () =>{ // functional component(Users)
    return(
        <Box
        sx={{
            width: 'calc(100% - 100px)',
            margin: 'auto',
            marginTop: '100px'
        }}>
        <UserForm />
        <UsersTable rows={users}/>
        </Box>
    );

}

export default Users //like export it default type