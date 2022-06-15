import "./addCustomer.css";
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios, { AxiosError } from "axios";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { customerModel } from "../../../../model/customerModel/customerModel";
import { useEffect } from "react";
import SuccsessMessage from "../../../../popupMessages/succsessMessage/succsessMessage";
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Container,Grid,Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddCustomer(): JSX.Element {
    
    const {token} = useTypedSelector((state)=>state.loginRed);

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [laName,setLaName] = useState<string>("");
    const [isSuccesses, setIsSuccesses] = useState(false)
    const [sucMessage, setSucMessage] = useState("");
    const [isLoad,setLoad] = useState<boolean>(false);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")

    useEffect(()=>{

    },[isSuccesses])

    useEffect(()=>{

},[isLoad])

    const url = "http://localhost:8080/admin/addCustomer"

    const handleClick = () => {
        const user: customerModel = {
            email: email,
            password: password,
            firstName:name,
            lastName:laName,
            coupons:[]
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
            setSucMessage("Customer Added!")
                }).catch((error:AxiosError) => {
            const err = error.response?.request.responseText
            const errMessage = JSON.stringify(err);
            console.log(errMessage)
            setMyError(errMessage)
            
            setError(true);        })
    }

    return (

        <Container maxWidth="lg" sx={{display:"flex" , flexDirection:"column" , alignContent:"center"}}>

        <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column"}}>

        <Grid item xs={12} sm={12}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Add Customer</Typography>
        </Grid>

        <Grid item xs={12} sm ={12}>

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
                id="firstName"
                label="firstName"
                placeholder="First Name"
                value={name}
                onChange={ (e) => { setName(e.target.value) } }
            />
            <br/>
            <TextField
                required
                className="inputRounded"
                id="lastName"
                label="LastName"
                placeholder="Last Name"
                value={laName}
                onChange={ (e) => { setLaName(e.target.value) } }
            />
            <br/>
            <Button sx={{ml:"1vw" , mt:"5vh"}} style={{borderRadius:"15px"}} variant="contained" onClick={handleClick}  disabled={(email&&password&&name&&laName)?false:true}>
                submit
            </Button>
        </Box>
        <Box 
         className='SomeInfo'
         width="100%"
         height="50%"
         sx={{
            borderLeft:1,
            borderColor:"divider"
        }}>
        <Typography variant="body1" style={{fontFamily:"Lora"}} className='SomeInfoText' >
            <AddCircleIcon fontSize="large"/>
            <br/>
             Welcome to the place where we add Customers :)
        </Typography>
        </Box>
        </Grid>


        <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>

                
        </Grid>


        </Container>

    );
}

export default AddCustomer;
