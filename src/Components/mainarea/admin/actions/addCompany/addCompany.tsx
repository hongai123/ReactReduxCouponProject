import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./addCompany.css";
import axios, { AxiosError } from "axios";
import { CompanyModel } from "../../../../model/companyModel/companyModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import SuccsessMessage from '../../../../popupMessages/succsessMessage/succsessMessage';
import {useEffect} from "react";
import ErrorMessage from '../../../../popupMessages/errorMessage/errorMessage';
import { Container, Typography, Grid } from '@mui/material';
import { border, borderLeft } from '@mui/system';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';


function AddCompany(): JSX.Element {
    const {token} = useTypedSelector((state)=>state.loginRed);
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [isSuccesses, setIsSuccesses] = useState(false)
    const [sucMessage, setSucMessage] = useState("");
    const [isLoad,setLoad] = useState<boolean>(false);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")

    useEffect(()=>{
        console.log("im here")
        console.log(isSuccesses)

    },[isSuccesses])

    useEffect(()=>{

},[isLoad])

    const url = "http://localhost:8080/admin/addCompany"

    const handleClick = () => {
        const user: CompanyModel = {
            email: email,
            name: name,
            password: password,
            coupons:[],
            
        };
        axios.post(url, user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"
            }
        }).then((resp) => {
            if(resp.status == 202)
                setIsSuccesses(true)
                setSucMessage("Company Added!")
        }).catch((error:AxiosError) => {
            const err = error.response?.data
            const errMessage = JSON.stringify(err);
            console.log(errMessage)
        
            setMyError(errMessage)
            
            setError(true);        })
    }

    return (
        <Container maxWidth="lg" sx={{display:"flex" , flexDirection:"column" , alignContent:"center"}}>

        <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column"}}>

        <Grid item xs={12} sm={12}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Add Company</Typography>
        </Grid>

        <Grid item xs={12} sm ={12}>
        <Box
            width="60%"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' }
            }}
            noValidate
            autoComplete="off"
            >

            <TextField
                required
                className="inputRounded"
                id="email"
                label="Email"
                placeholder="Email"
                value={email}
                onChange={ (e) => { setEmail(e.target.value) } }
            />
            <br/> 
            <TextField
                required
                className="inputRounded"
                id="password"
                label="Password"
                placeholder="Password"
                value={password}
                onChange={ (e) => { setPassword(e.target.value) } }
            />
            <br/> 
            <TextField
                required
                className="inputRounded"
                id="name"
                label="Name"
                placeholder="Name"
                value={name}
                onChange={ (e) => { setName(e.target.value) } }
            />
            <br/>
            <Button sx={{ml:"1vw" , mt:"5vh"}} style={{borderRadius:"15px"}} variant="contained" onClick={handleClick} disabled={(email&&name&&password)?false:true} >
                submit
            </Button>
        </Box>
        </Grid>
        
        <Box 
         className='SomeInfo'
         width="100%"
         height="50%"
         sx={{
            borderLeft:1,
            borderColor:"divider"
        }}>
        <Typography variant="body1" style={{fontFamily:"Lora"}} className='SomeInfoText' >
            <AddBusinessIcon fontSize='large'/>
            <br/>
             Welcome to the place where we add companies :)
        </Typography>
        </Box>


        <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>
        
        </Grid>


        </Container>

    );
}

export default AddCompany;