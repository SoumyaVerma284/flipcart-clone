import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState, useEffect } from "react";
import { Button, Container } from '@mui/material';
import axios from "axios";
import ResponsiveAppBar from "./Component1";
import TemporaryDrawer from "./Drawer1";
import MiniDrawer from './MiniDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid2';

import { ProductCountContext } from './context';
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: 'rotate(0deg)',
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: 'rotate(180deg)',
      },
    },
  ],
}));

export default function Products() {

  let props = React.useContext(ProductCountContext)
  const{cart,removeFromCart}=React.useContext(ProductCountContext)

    const [records,setRecords]=useState([])
    
    
    useEffect(()=>{
      axios.get("https://dummyjson.com/products")
      .then(res=>{setRecords(res.data.products)})
      .catch(err=>console.log(err))
  
    },[])
    
    const[productCount,setProductCount]=useState(0)
      function addToCart(){
        console.log("I am in add to cart");
        setProductCount(productCount+1)
      }
      const totalPrice=props.arr.reduce((acc,product)=>acc+product.price,0);
      
      
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  
  return <>

  <Container sx={{margin:10}}>

<Grid2 Container style={{backgroundColor:"LightGrey"}}>
          <Grid2 size={{ xs: 6, md: 4 }} style={{"padding": "20px"}}>
        

      {/* </Grid2> */}
     
      </Grid2>
      </Grid2>

    <Grid2 spacing={10} container>
       


    </Grid2>
    </Container>
    </>
}
