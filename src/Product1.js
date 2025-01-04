import { useParams } from "react-router";
import { useState, useEffect } from "react";
import * as React from 'react';
import axios from "axios";


function Product1(){
    

    let { id } = useParams();
    const [data,setData]=useState([])

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{setData(res.data)})
    .catch(err=>console.log(err))

  },[])

    return <>
        <>Product page {id} </>
        <div>
        <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>body</th>
            </tr>
        </thead>
        <tbody>
            <tr>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
        </tr>
        </tbody>
        </table>
        </div>
        </>
    
}


export default Product1;