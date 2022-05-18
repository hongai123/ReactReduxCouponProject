import "./updateCompany.css";
import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios, { AxiosError } from "axios";
import { CompanyModel } from "../../../../model/companyModel/companyModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import SuccsessMessage from "../../../../popupMessages/succsessMessage/succsessMessage";
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Container,Grid,Typography } from "@mui/material";
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';

function UpdateCompany(): JSX.Element {
    
    const {token} = useTypedSelector((state)=>state.loginRed);

    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [companyId, setId] = useState<number>(0)
        const [isSuccesses, setIsSuccesses] = useState(false)
    const [sucMessage, setSucMessage] = useState("");
    const [isLoad,setLoad] = useState<boolean>(false);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")

    const url = "http://localhost:8080/admin/updateCompany"

    const handleClick = () => {
        const user: CompanyModel = {
            email: email,
            name: "string",
            password: password,
            id:companyId,
            coupons:[],
            
        };
        axios.put(url, user, {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"
            }
        }).then((resp) => {

            if(resp.status == 200)
            setIsSuccesses(true)
            setSucMessage("Company Updated!")
                }).catch((error:AxiosError) => {
                    const err = error.response?.request.responseText
                    const errMessage = JSON.stringify(err);
                    console.log(errMessage)
                    setMyError(errMessage.slice(22,66)
                    )
                    
                    setError(true);   
            
        })
    }

    return (
        <Container maxWidth="lg" sx={{display:"flex" , flexDirection:"column" , alignContent:"center"}}>

        <Grid container spacing={2} sx={{display:"flex" , flexDirection:"column"}}>

        <Grid item xs={12} sm={12}>
        <Typography variant="h3" style={{fontFamily:"Lora"}} >Update Company</Typography>
        </Grid>

        <Grid item xs={12} sm ={12}>

        </Grid>
        
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
                type="number"
                id="id"
                label="id"
                placeholder="id"
                value={companyId}
                onChange={ (e) => { setId(Number(e.target.value)) } }
            />
            <br/>
            <Button  sx={{ml:"1vw" , mt:"5vh"}} style={{borderRadius:"15px"}} variant="contained" onClick={handleClick} >
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
            <SystemUpdateAltIcon fontSize="large"/>
            <br/>
             Welcome to the place where we Update Companies :)
        </Typography>
        </Box>


        <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>

        </Grid>


</Container>
    );
}

export default UpdateCompany;
