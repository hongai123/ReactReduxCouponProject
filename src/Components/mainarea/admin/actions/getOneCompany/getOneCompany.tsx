import "./getOneCompany.css";
import { CompanyModel } from "../../../../model/companyModel/companyModel";
import CompanyTable from "../../../../style-box/companyTable/companyTable";
import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";
import { Box, Collapse } from "@mui/material";
import { TextField } from "@mui/material";


function GetOneCompany(): JSX.Element {
    const {token,error} = useTypedSelector(state=>state.loginRed);
    const [companies,setCompanies] = useState<CompanyModel[]>([]);
    const [oneCompany,setOneCompany] = useState<CompanyModel[]>([]);
    const [isLoad,setLoad] = useState<boolean>(false);
    const [isError,setError] = useState(false);
    const [myError,setMyError] = useState("")
    const [collapse,setCollapse] = useState(false);
    const [getOneCompany,setGetOneCompany] = useState(false);
    const [singleCid,setSingleID] = useState(0);
    const [collapse2,setCollapse2] = useState(false);

    //get one Company
useEffect(()=>{
 
},[getOneCompany])

useEffect(()=>{

},[collapse2])

const handleOneCompany = ()=>{
    const url = `http://localhost:8080/admin/getCompanyByID/${singleCid}`

    axios.get(url,{
        headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': token ? token : "Bearer error"    
    }
    }).then((response)=>{
        console.log(response)
        setOneCompany([...[],response.data]);
        console.log(oneCompany)
        if(response.data){
            setCollapse2(true)
            setGetOneCompany(true);
        }
    
    }).catch((error:AxiosError)=>{
        const err = error.response?.request.responseText
        const errMessage = JSON.stringify(err);
        console.log(errMessage)
        setCollapse2(false)
        setMyError(errMessage.slice(22,66)
        )
        
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
        <div>
        <Box>
        <TextField
                required
                type="number"
                id="id"
                label="id"
                placeholder="id"
                value={singleCid}
                onChange={ (e) => { setSingleID(Number(e.target.value)) } }
            />
            <br/>
            <br/>
        <ColorButton onClick={handleOneCompany}>get one company</ColorButton>
        <br/>
        <br/>
        <ColorButton onClick={()=>setCollapse2(false)}>close</ColorButton>

        <br/>
        <br/>

        <div>
        <Collapse in={collapse2}>
            <div>
			<CompanyTable company={oneCompany}/>
            </div>
        </Collapse>
        </div>

        <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>

        </Box>

        </div>
    );
}

export default GetOneCompany;
