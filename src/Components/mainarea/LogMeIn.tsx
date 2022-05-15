import * as React from 'react';
import  "./LogMe.css"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useActionOnCustomer, useActions} from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios, { AxiosError } from 'axios';
import {CouponModel} from "../model/couponModel/couponModel"
import { FormHelperText } from '@mui/material';



//import spaceLogin from "assets/img/spaceLogin.jpg"
function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();


export default function SignInSide() : JSX.Element {
const [userName, setUserName] = useState<string>("");
const [pass,setPassword] = useState<string>("");
const [role,setRole] = useState<string>("");
const [tryToLog,setLog] = useState(false);
const {token,error, isLogged} = useTypedSelector((state)=>state.loginRed);
const {logMe} = useActions();
const {logMeOut} = useActions();
const navigte = useNavigate();
const [localToken,setLocalToken] = useState<string|null>("")
let loged = null;
const {CustomerUploadCoupon} = useActionOnCustomer();
const {coupons} = useTypedSelector(state=>state.couponsReducer);
const [customerCoupons, setCoupons] = useState<CouponModel[]>([]);
const [enableButt,setEnableBut] = useState(true);
const [imFocused,setFocus] = useState(false);
const [imFocused2,setFocus2] = useState(false);
const [imFocused3,setFocus3] = useState(false);






useEffect(()=>{
  console.log(isLogged)  
  console.log("token is:")
  console.log(token)

  if(token){
  navigte("/")
  } 
  
},[localToken])

useEffect(()=>{
console.log("im in customer useEffect")
console.log(coupons)
const term = {
  coupons: customerCoupons

}
CustomerUploadCoupon(term);
if(token){
navigte("/")
}
},[customerCoupons])



useEffect(()=>{
 console.log(isLogged) 
},[tryToLog])


useEffect(()=>{
  console.log(2)
  if(userName.includes("@") && pass && role){
    setEnableBut(false);
  }else{
    setEnableBut(true);
  }
},[imFocused,imFocused2,imFocused3])





  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault();
    const user = {
    username:userName,
    password:pass,
    role:role
  } 
      const url = `http://localhost:8080/token/log/${user.role}`
      let myToken = "";

      
       axios
      .post(url,{
        username: user.username,
        password: user.password
      }

      
      )
      .then((response)=>{
        console.log(response)
        myToken = response.headers.authorization;
        const terms = {
          token: myToken,
           error: "",
            role:user.role
        }

        //speical case

        if(terms.role ==="CUSTOMER"){

        const url2 = "http://localhost:8080/customer/AllCustomerCoupon";
        axios.get(url2,{headers:{
          Authorization: terms.token
      
        }}).then((response)=>{
          logMe(terms)
          setCoupons(response.data);
          setLocalToken(terms.token);
        }).catch((error:AxiosError)=>{
          logMe(terms)
          setLocalToken(terms.token);
          console.log(error);
        })}
        else{
          logMe(terms)
          setLocalToken(terms.token);
        }
        
      })
      .catch((error:any)=>{
        console.log(error)
        const terms = {
          token:"",
          error:"invalid username or password",
          role:user.role
        }

        logMe(terms);
        setLog(!tryToLog)
        loged=false;

      })

}






  const setToken = ()=>{
    setLocalToken(token);
  }

 
  const handleChangeUsername = (event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setUserName(event.target.value);

  }

  const handleChangePassword = (event:React.ChangeEvent<HTMLInputElement>)=>{
    event.preventDefault();
    setPassword(event.target.value);

  }

  const handleChangeRole = (event:SelectChangeEvent<string>)=>{
    event.preventDefault();
    setRole(event.target.value);

  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url("https://wallpaperaccess.com/full/39610.jpg")` ,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder='email@email.com'
                value={userName}
                onChange={handleChangeUsername}
                //error={ ((userName ==="") || !(userName.includes("@")))}
                onFocus={()=>{setFocus(true)}}
                onBlur={()=>{userName.includes("@")&&setFocus(false)}}
                helperText={imFocused&&(userName === "" ? "Field is empty":"" || !userName.includes("@")?"@ is missing":"")  }
                
              />
            


              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={pass}
                onChange={handleChangePassword}
                onFocus={()=>{setFocus2(true)}}
                onBlur={()=>{pass!==""&&setFocus2(false)}}
                helperText={imFocused2&&(pass === "" && "Field is empty")}
              />

             <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                 labelId="demo-simple-select-label"
                 id="demo-simple-select"
                 label="Role"
                 value={role}
                 onChange = {handleChangeRole}
                onFocus={()=>{setFocus3(true)}}
                onBlur={()=>{setFocus3(false)}}
                                       >
             <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
             <MenuItem value={"COMPANY"}>COMPANY</MenuItem>
             <MenuItem value={"CUSTOMER"}>CUSTOMER</MenuItem>
              </Select>
              {(imFocused3&&role==="")&&<FormHelperText>  role is missing </FormHelperText>}
             </FormControl>

             {!isLogged && isLogged!==null?<div>Invalid user name or password</div>:<div></div>}
                
              <Button
                disabled={enableButt}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}