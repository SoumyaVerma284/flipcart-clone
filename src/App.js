import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Component1';
import TemporaryDrawer from './Drawer';
import{ useState }from'react';
import { Button } from '@mui/material';
import {BrowserRouter,Route,Routes}from'react-router-dom';
import Login from'./Login';
import Registration from './Registration';
import Addproduct from './Addproduct';
import Viewproduct from './Viewproduct';
import ContactUs from './ContactUs';
import SignIn from './SignIn';
import Registration1 from './Registration1';
import Getpost from './Getpost';
import BasicTable from './BasicTable';
import Product from './Product';
import RecipeReviewCard from './RecipeReviewCard';
import Products from './Products';
import MiniDrawer from './MiniDrawer';
import Signin1 from './Signin1';
import Login1 from './Login1';
import Layout from './Layout';
import { ProductCountContext } from './context';


function App() {
  const [arr, setArr]= useState([])



  function addToCart(product){
    console.log("I am in add to cart", product);

    arr.push(product);
    setArr([...arr]);

  }

  function deleteItem(id){
    console.log("i m in delte", id);

    let newArr = arr.filter((val)=>{
      if(val.id != id){
        return val
      }

    })

    setArr([...newArr]);

    
  }


  return (
    
  
    <ProductCountContext.Provider value={ {addToCart: addToCart, arr: arr, deleteItem: deleteItem} } >
  

      <BrowserRouter>
      <Routes>
      {/* <Route path='Signin1' element={<Signin1/>}/>
        <Route path='/' element={<SignIn/>}/> */}
        {/* <Route path='admin' element={<Layout/>}/> */}

          <Route path='products' element={<MiniDrawer/>}>
            <Route path='' element={<Products/>}/>
            <Route path='product/:id' element={<Product/>}/>
          </Route>
        <Route path='/' element={<Login1/>}/>
        <Route path='Registration' element={<Registration/>}/>
        <Route path='Registration1' element={<Registration1/>}/>
        <Route path='Addproduct' element={<Addproduct/>}/>
        <Route path='Viewproduct' element={<Viewproduct/>}/>
        <Route path='ContactUs' element={<ContactUs/>}/>
        <Route path='Getpost' element={<Getpost/>}/>
        <Route path='BasicTable' element={<BasicTable/>}/>
        <Route path='RecipeReviewCard' element={<RecipeReviewCard/>}/>
        <Route path='MiniDrawer' element={<MiniDrawer/>}/>
      
        
        
      </Routes>
      </BrowserRouter>
    </ProductCountContext.Provider>

  );
}

export default App;
