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
import Grid2 from '@mui/material/Grid2';

import axios from "axios";
import ResponsiveAppBar from "./Component1";
import TemporaryDrawer from "./Drawer1";
import MiniDrawer from './MiniDrawer';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <Grid2 container spacing={2}>
        <Grid2 container size={9}>
        { records&& records.map((val,index)=>{
            return <Grid2 item size={4}>
        

                  <Card sx={{ maxWidth: 345 }}>
                  
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                          {val.id}
                        </Avatar>
                      }
                      action={
                        <IconButton aria-label="settings">
                          <MoreVertIcon />
                        </IconButton>
                      }
                      
                    title={val.title} 
                      
                    />
                    
                    
                    <CardMedia
                      component="img"
                      height="194"
                      image={val.images[0]}
                      alt="Paella dish"
                    />
                    <CardContent>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        
                        
                          {val.description}<br></br>
                          ${val.price}<br></br>
                          
                        
                      </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                      <a href={`/products/product/${val.id}`} style={{marginRight:'20px'}}>View</a><br></br>

                      <Button variant="contained"  onClick={(event)=>{
                          
                          props.addToCart(val);
                        
                        }} startIcon={<ShoppingCartIcon/>}></Button>


                      <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                      <CardContent>
                        <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                          
                          
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                          
                      
                        </Typography>
                        <Typography sx={{ marginBottom: 2 }}>
                        
                        </Typography>
                        <Typography>
                        
                        </Typography>
                      </CardContent>
                    </Collapse>
                    
                  </Card>

    
    </Grid2>
})}
        </Grid2>
        <Grid2 size={3}>
        {props.arr.map((val, index) => {
        
        return<Grid2 item size={{xs:6,md:4}}>

          <Card sx={{ minWidth: 275, backgroundColor: "PaleGoldenRod" , margin: "10px"}} >
            <CardContent>
              <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }} style={{ color: "black" }}>
                <b>{val.title}</b>
              </Typography>

              <Typography sx={{ color: 'text.secondary', mb: 1.5 }} style={{ color: "black" }}>{val.quantity}</Typography>
              <Typography variant="body2" style={{ color: "black" }}>
                {val.price}
              </Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" size="small" style={{marginRight:'10px',backgroundColor:'red'}} onClick={()=>{props.deleteItem(val.id);}}><DeleteIcon/></Button> 

            </CardActions>
          </Card>
          
          </Grid2>
        }
        )}
        <span id="bu"> Total:<strong>${totalPrice}</strong> </span><br/><br/>
          <span id="bu"><Button variant="contained">CheckOut</Button></span>
        </Grid2>

    </Grid2>
    </>
}
