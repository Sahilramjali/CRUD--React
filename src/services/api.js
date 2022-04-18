import axios from "axios";
export const fetchData=async()=>{
    return await axios.get("http://localhost:3333/Students");
}