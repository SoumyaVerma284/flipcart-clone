import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from "react";
import axios from "axios";


export default function BasicTable() {
    const [records,setRecords]=useState([])

    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>{setRecords(res.data)})
      .catch(err=>console.log(err))
  
    },[])


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Body</TableCell>
            <TableCell align="right">View</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((val)=>{
            return <TableRow
              key="1"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {val.id}
              </TableCell>
              <TableCell align="right">{val.title}</TableCell>
              <TableCell align="right">{val.body}</TableCell>
              <TableCell align="right"><a href={`/product/${val.id}`}>View</a></TableCell>

            </TableRow>
          })
            
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}