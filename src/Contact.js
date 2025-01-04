import * as React from 'react';
import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  Container from '@mui/material/Typography';
import { Grid2,TextField } from '@mui/material';

function Contact(){
return(
    <div classname="Box">
        
                <Typography gutterButton varient="h5">Contact Us</Typography>
                <form>
                <Grid2 container spacing={1}>
                    <Grid2 xs={6} sm={3} item>
                        <TextField  label="First Name" placeholder="Enter first name" varient="outlined" fullwidth required/><br/><br/> 
                    </Grid2>
                    <Grid2 xs={6} sm={3} item>
                        <TextField  label="Last Name" placeholder="Enter last name" varient="outlined" fullwidth required/><br/><br/> 
                    </Grid2>
                    <Grid2 xs={12}item>
                        <TextField  label="Email" placeholder="Enter email" varient="outlined" fullwidth required/><br/><br/> 
                    </Grid2>
                    <Grid2 xs={12}item>
                        <TextField  label="Password" placeholder="Enter Password" varient="outlined" fullwidth required/><br/><br/> 
                    </Grid2>
                    <Grid2 xs={12}item>
                         <TextField  label="Number" placeholder="Enter Phone number" varient="outlined" fullwidth required/><br/><br/> 
                    </Grid2>
                    <Grid2 xs={12}item>
                        <TextField  label="Message" multilinerows={4} placeholder="Type your message" varient="outlined" fullwidth required/><br/><br/> 
                    </Grid2>
                    <Grid2 xs={12}item>
                    <Button type="submit" varient="contained" color="primary" fullwidth>Submit</Button><br/><br/> 
                    </Grid2>
                </Grid2>
                </form>
            
    
    </div>
);
}
export default Contact;