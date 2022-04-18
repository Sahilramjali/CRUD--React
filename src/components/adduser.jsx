import { FormControl, FormGroup, Input, InputLabel,Button } from "@mui/material";
import "../css/adduser.css";
const AddUser=()=>{
    return(
       <FormGroup className="container">
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input/>
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input/>
           </FormControl>
           <Button>Insert</Button>
       </FormGroup>
    );
}
export default AddUser;