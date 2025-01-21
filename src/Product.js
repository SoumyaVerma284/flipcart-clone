import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";
import { Container,Grid2 } from "@mui/material";
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ResponsiveAppBar from "./Component1";
import TemporaryDrawer from "./Drawer1";
import StoreIcon from '@mui/icons-material/Store';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import StarRateIcon from '@mui/icons-material/StarRate';
import MiniDrawer from "./MiniDrawer";

function Product(){
  let arr=[{Title:"Mascara Lash Princess",quantity:"2",amount:"$12"},{Title:"Foundation",quantity:"3",amount:"$16"}]

    let { id } = useParams();
    const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res=>{setData(res.data)})
    .catch(err=>console.log(err))

  },[])
  // let arr3 = [];
  // let obj ={Title:"name"};
  // const[item,setItem]=useState(0)
  const[productCount,setProductCount]=useState(0)
  function addToCart(){
    console.log("I am in add to cart");
    if(!localStorage.getItem("pc")){
      localStorage.setItem('pc', 0);
      // localStorage.setItem('item', obj.data.title);
    }
    localStorage.setItem('pc', parseInt(localStorage.getItem("pc"))+1)
    setProductCount(productCount+1)
  }
  
    return <>

    <Container>
        <>Product page {id} </>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6, md: 3}}>
           <img src={data.thumbnail} alt="" height={250} />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 5}}>
           <b>Title</b>:{data.title}<br></br><br></br>
           <b>Description</b>:{data.description}<br></br><br></br>
           <b>Brand</b>:{data.brand}<br></br><br></br>
           <b>Price</b>:${data.price}<br></br><br></br>
           <b>Return Policy</b>:{data.returnPolicy}<br></br><br></br>
           <Button variant="contained" style={{marginRight:'10px'}} startIcon={<StoreIcon/>}>Buy Now</Button>
           <Button variant="contained" onClick={(event)=>{addToCart();}} startIcon={<ShoppingCartIcon/>}>Add to Cart</Button>
          </Grid2>
          <Grid2 Container style={{backgroundColor:"LightGrey"}}>
          <Grid2 size={{ xs: 6, md: 4 }}>
        {arr.map((val, index) => {
        return<Grid2 item size={{xs:6,md:4}}>

          <Card sx={{ minWidth: 275, backgroundColor: "PaleGoldenRod" , margin: "10px"}} >
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} style={{ color: "black" }}>
                <b>{val.Title}</b>
              </Typography>

              <Typography sx={{ color: 'text.secondary', mb: 1.5 }} style={{ color: "black" }}>{val.quantity}</Typography>
              <Typography variant="body2" style={{ color: "black" }}>
                {val.amount}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Sunny Day {val.name}</Button> */}
              {/* <LightModeIcon style={{color:"orange"}} />
           <AirIcon style={{color:"blue"}}/>  */}

            </CardActions>
          </Card>
          
          </Grid2>
        }
        )}
          <span id="bu"> Total: </span><br/><br/>
          <span id="bu"><Button variant="contained">CheckOut</Button></span>

      {/* </Grid2> */}
     
      </Grid2>
      </Grid2>
          
          <Grid2 size={{xs:12,md:6}}>
          <b>Reviews</b> <br></br>
          <Stack spacing={1}>
           <Rating name="size-medium" value={parseInt(data.rating)}  />
           </Stack>
          <b>Rating</b>={data.rating} <br></br><br></br>
          {
            (data.reviews && data.reviews.length>0)?
            data.reviews.map((val)=>{
              
               return <Grid2 item size={ {xs:12, md: 3} } >
                    <Card sx={{ minWidth: 275 ,backgroundColor:"pink",margin:"10px"}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                              <StarRateIcon/>
                            {val.rating}
                            </Typography>
                            <Typography variant="h5" component="div">
                            
                            </Typography>
                            <Typography sx={{ color: 'text.secondary', mb: 1.5 }}> {val.comment}</Typography>
                            <Typography variant="body2">
                             {val.reviewerName}<br></br>
                             {val.reviewerEmail}<br></br>
                            <br />
                            </Typography>
                        </CardContent>
                        <CardActions>  
                          <ThumbUpIcon/>
                          <ThumbDownIcon/>
                        </CardActions>
                    </Card>
                </Grid2>
            }):"Loading..."
          }
 
          </Grid2>
       </Grid2>
       </Container>
         
        </>
    
}


export default Product;