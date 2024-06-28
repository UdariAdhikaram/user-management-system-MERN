import { Button, Grid, Input, Typography } from "@mui/material";
import { useState } from "react";   // react hook
import { useEffect, useState } from "react";   // react hook

const UserForm = props => {
const UserForm = ({ addUser, submitted }) => {

    //varible update
    const [id, setId] = useState(0);
    const [name, setName//update functon
        ] = useState("");

        useEffect(() =>{
            if(!submitted) {
                setId(0);
                setName('')
            }
        },[submitted]);

    return(
        <Grid //like div
            container
            spacing={2}
            sx={{ //like css part
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}   
        >

            <Grid item xs={12}> 
                <Typography component={'h1'}
                    sx={{
                        color:'#000000',
                        fontSize: '25px',
                        paddingLeft: '200px',
                        fontWeight: 'bold'
                    }}
                >User Form</Typography>
            </Grid>

                    <Grid item xs={12} sm={6} // extra small size - full screen, small type - half
                    sx={{display: 'flex'}} //display top to down with arrange align
                    >
                        <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color:'#000000',
                            marginRight: '20px',
                            fontSize: '20px',
                            width: '100px',
                            display: 'block',
                        }}>ID</Typography>
                        <Input
                            type='number' //called props(type, id, name)
                            id='id' //props
                            name= 'id' // props
                            sx={{
                                width:'400px'}}
                                value={id}
                                onChange={e => setId(e.target.value)} />
                    </Grid>

                    <Grid item xs={12} sm={6} // extra small size - full screen, small type - half
                    sx={{display: 'flex'}} 
                    >
                        <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color:'#000000',
                            marginRight: '20px',
                            fontSize: '20px',
                            width: '100px',
                            display: 'block',
                            paddingTop: '20px'
                        }}>Name</Typography>
                        <Input 
                            type='text'
                            id='name'
                            name= 'name'
                            sx={{
                                width:'400px'}}
                                value={name}
                                onChange={e => setName(e.target.value)} 
                                />
                    </Grid>

                    <Button
                        sx={{
                            margin: 'auto',
                            marginBottom: '20px',
                            backgroundColor: '#00c6c6',
                            color: '#000000',
                            maringLeft: '15px',
                            marginTop: '20px',
                            "&:hover":{
                                opacity: '0.7',
                                backgroundColor: '#00c6c6'
                            }
                        }}>
                            Add
                    </Button>
        </Grid>
    )
}

export default UserForm; // wena onama component eka idan me file eke function ekata cl karannna puluwan