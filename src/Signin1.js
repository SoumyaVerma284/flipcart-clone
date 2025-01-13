import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Card} from '@mui/material';
import { Container } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Signin1() {

   const [email, setEmail] = useState();  
   const [password, setPassword] = useState();
   const [result1, setResult1] = useState();
   const [result2, setResult2] = useState();
   const navigate = useNavigate();

   function SubmitData(){
   

    console.log("email : ",email);    
    console.log("pass : ",password);

    // validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      console.log('Please enter a valid email address.');
      return false;
    } else {
      
    }

    if (!password || password.length < 6) {
      console.log('Password must be at least 6 characters long.');
      return false;

    } else {
     
    }

    /*
    // API CALL
    axios.post("https://jsonplaceholder.typicode.com/posts", {email, password}, { headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }} )
    .then((response) => {

      //check response
      if(response.status == "201"){
        console.log("Login successfully");
        navigate("/products");
      }else{
        console.log("Not Login successfully");

      }
    })
    .catch((error)=>{ console.log(error)})
  */

    if(email== "a@a.com" && password == "123456"){
      console.log("Login successfully");
      navigate("/products");
    }else{
      console.log("Not Login successfully");
    }
    
   }

  return (   
    <>    <Container>
     
        <Card sx={{display: 'flex', flexDirection: 'column', alignSelf: 'center',  width: '100%',  padding: 4,
                    gap: 2, margin: 'auto',  maxWidth: '450px'}} variant="outlined">
         
          <Typography component="h1" variant="h4" sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}>
            Sign in
          </Typography>
          <Box component="form" 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              gap: 2,
            }}
          >
            <FormControl>
              <FormLabel htmlFor="email">Email</FormLabel>
              <TextField               
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                autoComplete="email"                
                required
                fullWidth
                variant="outlined"
                onChange={(e)=>{setEmail(e.target.value);  console.log("email",email);}}
               
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <TextField               
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="current-password"               
                required
                fullWidth
                variant="outlined"
                onChange={(e)=>{setPassword(e.target.value)}}
               
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            
            <Button type="button" name="submit" value="submit" variant="contained"   
              onClick={SubmitData}
            >
              Sign in
            </Button>
           
          </Box>       
        
        </Card>
        </Container>
 
       
        </>
  );
}

