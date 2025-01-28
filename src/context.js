import { create } from "@mui/material/styles/createTransitions";
import { createContext } from "react";

const UserContext = createContext();
const ProductContext = createContext();
const OrderContext = createContext();


const ProductCountContext = createContext();


export {UserContext, ProductContext, OrderContext, ProductCountContext}