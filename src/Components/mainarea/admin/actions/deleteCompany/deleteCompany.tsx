import "./deleteCompany.css";
import { Box,TextField,Button } from "@mui/material";
import {useEffect, useState} from "react"
import axios, { AxiosError } from "axios"
import {useTypedSelector} from "../../../../../hooks/useTypedSelector"
import SuccsessMessage from "../../../../popupMessages/succsessMessage/succsessMessage";
import ErrorMessage from "../../../../popupMessages/errorMessage/errorMessage";



interface companyDeleteProps{
    id:number
}

function DeleteCompany(): JSX.Element {
const [companyId,setCompanyId] =useState(0);
const {token} = useTypedSelector(state=> state.loginRed);
const [isSuccesses, setIsSuccesses] = useState(false)
const [sucMessage, setSucMessage] = useState("");
const [isLoad,setLoad] = useState<boolean>(false);
const [isError,setError] = useState(false);
const [myError,setMyError] = useState("")

useEffect(()=>{

},[isSuccesses])
useEffect(()=>{

},[isError])


const onClickHandle = ()=>{
    const url = `http://localhost:8080/admin/deleCompamy/${companyId}`

    axios.delete(url,{
        headers:{
            'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': token ? token : "Bearer error"

        }
    })
    .then((response)=>{
        if(response.status == 200)
        setIsSuccesses(true)
        setSucMessage("Company Deleted!")
            }).catch((error:AxiosError) => {
        const err = error.response?.request.responseText
        const errMessage = JSON.stringify(err);
        console.log(errMessage)
        setMyError(errMessage.slice(22,66)
        )
        
        setError(true);     })

}


    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            >
                <br/>
                <TextField
                required
                type="number"
                id="companyID"
                label="ID"
                placeholder="COMPANY ID"
                value={companyId}
                onChange={ (e) => { setCompanyId(Number(e.target.value))}}
            />
            <br/>
            <Button variant="contained" onClick={onClickHandle} >
                submit
            </Button>

            <SuccsessMessage isSuccesses={isSuccesses} sucMessage={sucMessage} onClickHandle={()=>setIsSuccesses(false)}/>
            <ErrorMessage isError={isError} myError={myError} onClickHandle={()=>setError(false)}/>


            </Box>
    );
}

export default DeleteCompany;
