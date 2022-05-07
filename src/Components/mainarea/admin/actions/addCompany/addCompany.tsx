import "./addCompany.css";
import axios from "axios";
import { useEffect } from "react";
import { CompanyModel } from "../../../../model/companyModel/companyModel";
import { useTypedSelector } from "../../../../../hooks/useTypedSelector";

function AddCompany(): JSX.Element {

    const {token} = useTypedSelector((state)=>state.loginRed);


    useEffect(()=>{
        console.log(token)


    },[])

    const someTry:CompanyModel = {
        email:"or@gmail.com",
        name:"huy",
        password:"123213"
    }
    const url = "http://localhost:8080/admin/addCompany"

    axios.post(url,someTry,{headers:{
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': token?token:"Bearer error"
        
    }}).then(response=> console.log(response)).catch(error=>{console.log(error)})
       

    

    




    return (
       <>
       <div>
           Im here
       </div>
       </>
    );
}

export default AddCompany;
