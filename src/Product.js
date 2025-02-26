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
import { ProductCountContext } from "./context";

function Product(){


    let props = React.useContext(ProductCountContext)
    let { id } = useParams();
    const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res=>{setData(res.data)})
    .catch(err=>console.log(err))

  },[])
  // let arr1 = [];
  let obj =[{Title:data.title},{Amount:data.price}];
  const[item,setItem]=useState(0)
  const[productCount,setProductCount]=useState(0)
  function addToCart(){
    console.log("I am in add to cart");
    if(!localStorage.getItem("pc")){
      localStorage.setItem('pc', 0);

       const jsonstring=JSON.stringify(obj);
       localStorage.setItem('item', jsonstring);
    }
    localStorage.setItem('pc', parseInt(localStorage.getItem("pc"))+1)
    setProductCount(productCount+1)
  }
  
    return <>

    <Container>
        <>Product page {id} </>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6, md: 4}}>
           <img src={data.thumbnail} alt="" height={250} />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 8}}>
           <b>Title</b>:{data.title}<br></br><br></br>
           <b>Description</b>:{data.description}<br></br><br></br>
           <b>Brand</b>:{data.brand}<br></br><br></br>
           <b>Price</b>:${data.price}<br></br><br></br>
           <b>Return Policy</b>:{data.returnPolicy}<br></br><br></br>
           <Button variant="contained" style={{marginRight:'10px'}} startIcon={<StoreIcon/>}>Buy Now</Button>
           <Button variant="contained" onClick={(event)=>{
            
            props.addToCart(data);
          
          }} startIcon={<ShoppingCartIcon/>}>Add to Cart</Button>
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