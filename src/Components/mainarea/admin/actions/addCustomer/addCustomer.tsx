import "./addCustomer.css";
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { customerModel } from "../../../../model/customerModel/customerModel";

function AddCustomer(): JSX.Element {
    
    const {token} = useTypedSelector((state)=>state.loginRed);

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [laName,setLaName] = useState<string>("");

    const url = "http://localhost:8080/admin/addCustomer"

    const handleClick = () => {
        const user: customerModel = {
            email: email,
            password: password,
            firstName:name,
            lastName:laName
        };
        axios.post(url, user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"
            }
        }).then((resp) => {
            if(resp.status == 202)
                alert("Customer Added")
        }).catch((err) => {
            alert(err)
        })
    }

    return (
       <div>
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
            <TextField
                required
                id="email"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={ (e) => { setEmail(e.target.value) } }
            />
            <br/> 
            <TextField
                required
                id="password"
                label="Password"
                placeholder="Password"
                value={password}
                onChange={ (e) => { setPassword(e.target.value) } }
            />
            <br/> 
            <TextField
                required
                id="firstName"
                label="firstName"
                placeholder="First Name"
                value={name}
                onChange={ (e) => { setName(e.target.value) } }
            />
            <br/>
            <TextField
                required
                id="lastName"
                label="LastName"
                placeholder="Last Name"
                value={laName}
                onChange={ (e) => { setLaName(e.target.value) } }
            />
            <br/>
            <Button variant="contained" onClick={handleClick} >
                submit
            </Button>
        </Box>
       </div>
    );
}

export default AddCustomer;
