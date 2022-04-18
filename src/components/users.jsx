import { fetchData } from "../services/api";
import { useEffect,useState } from "react";
import '../css/users.css';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
const Users=()=>{
const [users,setUsers]=useState([]);

    useEffect(() => {
      return () => {
        getusers();
      };
    }, [])

    const getusers=async()=>{
        const response=await fetchData();
        setUsers(response.data);
    }
    return(
        <Table className="table">
            <TableHead className="tablehead">
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
               {users.map((user)=>{
                 return(  <TableRow>
                       <TableCell>
                           {user.id}
                       </TableCell>
                       <TableCell>
                           {user.name}
                       </TableCell>
                       <TableCell>
                           {user.email}
                       </TableCell>
                   </TableRow>);
               })}
            </TableBody>

        </Table>
    );
}
export default Users;