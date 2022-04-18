import axios from "axios";
export const fetchData=async()=>{
    return await axios.get("http://localhost:3333/Students");
}
export const InsertUser=async (user)=>{
    return await axios.post("http://localhost:3333/Students",user);
}