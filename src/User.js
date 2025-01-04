import { useState, Cre } from "react";
import User1 from "./User1";
import { ProductContext, UserContext } from "./context";


function User(){

    let name = "Rahul";
    let email ="r@r.com";

    let obj = {name, email}

    let arr = ["Sumit", "Rahul"]

    return <>User <br />
        <UserContext.Provider value={[arr, obj]} >
            <ProductContext.Provider>
                 <User1 />
            </ProductContext.Provider>
        </UserContext.Provider>
    </>
}


export default User;