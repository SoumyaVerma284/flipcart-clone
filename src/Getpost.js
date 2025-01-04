import { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";
function Getpost(){
  const [records,setRecords]=useState([])

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res=>{setRecords(res.data)})
    .catch(err=>console.log(err))

  },[])
  return(
    <div>
        {/* <ul>
            {records.map((list,index)=>(
                <li key={index}>{list.id}|{list.title}|{list.body}</li>
            ))}
        </ul> */}
    <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            {records.map((r,i)=>(
                <tr key={i}>
                    <td>{r.id}</td>
                    <td>{r.title}</td>
                    <td>{r.body}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </div>
  )
        
        
}
export default Getpost;