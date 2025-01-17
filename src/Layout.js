import { Outlet } from "react-router-dom";
import Product from './Product';
import Products from'./Products';
import MiniDrawer from "./MiniDrawer";
function Layout(){
    return<>

    
    <Outlet/>
    </>


}
export default Layout;