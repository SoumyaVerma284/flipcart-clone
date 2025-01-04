import { useContext } from "react";
import { UserContext } from "./context";

function User1(){

    let res = useContext(UserContext);

    console.log(res);
    return <>User1<br/> {res[0][1]} {res[1]["email"]}</>
}


export default User1;