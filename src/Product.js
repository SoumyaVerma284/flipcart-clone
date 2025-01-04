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



function Product(){
    

    let { id } = useParams();
    const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(res=>{setData(res.data)})
    .catch(err=>console.log(err))

  },[])

    return <>
    <Container>
        <>Product page {id} </>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 6, md: 4 }}>
           <img src={data.thumbnail} alt="" height={250} />
          </Grid2>
          <Grid2 size={{ xs: 6, md: 8 }}>
           <b>Title</b>:{data.title}<br></br><br></br>
           <b>Description</b>:{data.description}<br></br><br></br>
           <b>Brand</b>:{data.brand}<br></br><br></br>
           <b>Price</b>:${data.price}<br></br><br></br>
           <b>Return Policy</b>:{data.returnPolicy}<br></br><br></br>
           <Button variant="contained">Buy Now</Button>
           <Button variant="contained">Add to Cart</Button>
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
                    <Card sx={{ minWidth: 275 ,backgroundColor:"pink"}}>
                        <CardContent>
                            <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
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