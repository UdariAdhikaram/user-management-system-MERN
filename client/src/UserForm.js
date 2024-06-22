import { Grid, Typography } from "@mui/material";

const UserForm = props => {
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
                        color:'#000000'
                    }}
                >User Form</Typography>
            </Grid>

                    <Grid item xs={12} sm={6} // extra small size ekedi full screen, small type ekedi half
                    sx={{display: 'flex'}} //eka pelata hdagannnawa
                    >
                        <Typography 
                        component={'label'} 
                        htmlFor="id"
                        sx={{
                            color:'#000000',
                            marginRight: '20px',
                            fontSize: '16px',
                            width: '50px',
                            display: 'block',
                        }}>ID</Typography>
                        <input 
                            type='number'
                            id='id'
                            name= 'id'
                            sx={{
                                width:'400px'}}
                                value={''}
                                onChange={e => {}} />
                    </Grid>
        </Grid>
    )
}

export default UserForm; // wena onama component eka idan me file eke function ekata cl karannna puluwan