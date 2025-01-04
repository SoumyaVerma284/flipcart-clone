import { useContext } from "react";
import { UserContext } from "./context";

function User2(){

    let res = useContext(UserContext);

    console.log(res);
    return <>User2 <br/> {res[0][1]} {res[1]["email"]}</>
}


export default User2;