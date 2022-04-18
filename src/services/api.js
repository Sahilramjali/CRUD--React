import axios from "axios";
export const fetchData=async(id)=>{
    id=id||"";
    return await axios.get(`http://localhost:3333/Students/${id}`);
}
export const InsertUser=async (user)=>{
    return await axios.post("http://localhost:3333/Students",user);
}
export const editUser =async(id,user)=>{
    return await axios.put(`http://localhost:3333/Students/${id}`,user);
}
export const deleteUser=async(id)=>{
              
    return await axios.delete(`http://localhost:3333/Students/${id}`);
}