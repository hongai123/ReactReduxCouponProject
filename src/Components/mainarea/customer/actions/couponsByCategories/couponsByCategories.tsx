import "./couponsByCategories.css";
import { useState } from "react";
import { CouponModel } from "../../../../model/couponModel/couponModel";
import axios, { AxiosError } from "axios";
import { useEffect } from "react";
import CouponBox from "../../../../style-box/couponBox/couponBox";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Box, Collapse } from "@mui/material";
import { TextField } from "@mui/material";


function CouponsByCategory(): JSX.Element {
    const [couponss,setCoupons] = useState<CouponModel[]>([])
    const {token} = useTypedSelector((state)=>state.loginRed);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")
    const [collapse,setCollapse] = useState(false);
    const [categoryID,setCategoryID] = useState(0);

    
    useEffect(()=>{
       
    },[couponss])

    useEffect(()=>{
        console.log(isError)
    },[isError])
    
    useEffect(()=>{
    
    },[collapse])

    const handleClick = ()=>{
        const url = `http://localhost:8080/customer/couponsCategory/${categoryID}`

        axios.get(url,{
            headers:{
                Authorization: token?token:"Bearer error"
            }
        }).then((response)=>{
            setCoupons(response.data);
            
    
        }).catch((error:AxiosError)=>{
            console.log(error)
            const err = error.response?.request.responseText
            const errMessage = JSON.stringify(err);
            setCoupons([])
            console.log(errMessage)
            setMyError(errMessage)           
            setError(true);
        })
        
    }



    const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
        color: theme.palette.getContrastText(grey[800]),
        backgroundColor: grey[800],
        '&:hover': {
          backgroundColor: grey[600],
          
        },
      }));


    return (
        <div className="coupons">

        <ColorButton             sx={{mb:"1%"}}
 onClick={()=>{    
            setCollapse(!collapse)

        }}>SHOW COUPONS BY CATEGORY</ColorButton>
        

<Collapse in={collapse} timeout={900}>
            <Box>
            <TextField 
            required
            id="categoryID"
            label="category id"
            placeholder="ID"
            type="number"
            value={categoryID}
            InputProps={{inputProps:{min:0, max:5}}}
            onChange={(e)=>setCategoryID(Number(e.target.value))}
            sx={{mr:"1%"}}
            />
            <ColorButton onClick={handleClick}>submit</ColorButton>

            {couponss&&<CouponBox coupons={couponss}/>}

            

            </Box>
</Collapse>

<ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>


        </div>
    );
}

export default CouponsByCategory;
