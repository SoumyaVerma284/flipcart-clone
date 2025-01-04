import { Button } from "@mui/material";
import'./Login.css'


function Login(){
    


 return<>
 <a href="Registration">Registration</a><br></br>
 <a href="Addproduct">Addproduct</a><br></br>
 <a href="Viewproduct">Viewproduct</a><br></br>
 <a href="ContactUs">ContactUs</a><br></br>
 <center> 
     <tr>
      <div className="box">
        <h1>Login</h1>
        <h4> Email:<input type="Text"></input><br/></h4>
        <h4> Password:<input type="Password"></input><br/></h4>
         <Button variant="contained">Submit</Button><br/>
         </div>
     </tr>
        
         </center>
  
        
   </>    
}
export default Login;