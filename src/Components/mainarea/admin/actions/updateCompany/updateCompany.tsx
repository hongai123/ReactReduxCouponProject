import "./updateCompany.css";
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";
import { CompanyModel } from "../../../../model/companyModel/companyModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";

function UpdateCompany(): JSX.Element {
    
    const {token} = useTypedSelector((state)=>state.loginRed);

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [companyId, setId] = useState<number>(0)

    const url = "http://localhost:8080/admin/updateCompany"

    const handleClick = () => {
        const user: CompanyModel = {
            email: email,
            name: "string",
            password: password,
            id:companyId
        };
        axios.put(url, user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"
            }
        }).then((resp) => {
            if(resp.status == 200)
                alert("Company Updated")
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
                type="number"
                id="id"
                label="id"
                placeholder="id"
                value={companyId}
                onChange={ (e) => { setId(Number(e.target.value)) } }
            />
            <br/>
            <Button variant="contained" onClick={handleClick} >
                submit
            </Button>
        </Box>
       </div>
    );
}

export default UpdateCompany;
