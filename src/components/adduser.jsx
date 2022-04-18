import { FormControl, FormGroup, Input, InputLabel,Button, Typography } from "@mui/material";
import { useState } from "react";
import "../css/adduser.css";
import { InsertUser } from "../services/api";
const initialData={
    name:'',
    email:''
}
const AddUser=()=>{
    const[user,setUser]=useState(initialData);
  // const {name,email}=user;
const onValueChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
   
}
const insertUserDetails=async()=>{
    await InsertUser(user);
}
    return(
       <FormGroup className="container">
           <Typography className="label">Add user</Typography>
           <FormControl style={{margin:'5%'}}>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name='name' className="enter"/>
           </FormControl>
           <FormControl style={{margin:'5%'}}>
               <InputLabel >Email</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name='email' />
           </FormControl>
           <Button variant="contained" color="success" onClick={insertUserDetails}>Insert</Button>
       </FormGroup>
    );
}
export default AddUser;