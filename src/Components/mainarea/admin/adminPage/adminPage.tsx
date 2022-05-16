import "./adminPage.css";
import * as React from 'react';
import Tabs , {tabsClasses} from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCompany from "../actions/addCompany/addCompany";
import UpdateCompany from "../actions/updateCompany/updateCompany";
import AddCustomer from "../actions/addCustomer/addCustomer";
import GetCompanies from "../actions/getCompanies/getCompanies";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import {useEffect} from "react"
import { useNavigate } from "react-router-dom";
import DeleteCompany from "../actions/deleteCompany/deleteCompany";
import GetOneCompany from "../actions/getOneCompany/getOneCompany";
import GetCustomers from "../actions/getCustomers/getCustomers";
import GetOneCustomer from "../actions/getOneCustomer/getOneCustomer";
import UpdateCustomer from "../actions/updateCustomer/updateCustomer";
import DeleteCustomer from "../actions/deleteCustomer/deleteCustomer";
import { Container,Fade,Grid } from "@mui/material";





interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }





function AdminPage() :JSX.Element {
    const [value, setValue] = React.useState(0);
    const {token, isLogged, role} = useTypedSelector(state=>state.loginRed)
    const nav = useNavigate();

    useEffect(()=>{
        if(role !== "ADMIN"){
            nav("/")
        }


    },[role,isLogged,token])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Fade in timeout={1200}>
      <Container maxWidth="lg" sx={{mt:"5vh"}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' , maxWidth:"100%" }}>
          <Tabs 
          variant="scrollable"
           scrollButtons
           value={value}
            onChange={handleChange} 
            aria-label="basic tabs example"
             sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }} >

            <Tab label="Add Company" {...a11yProps(0)} />
            <Tab label="Update Company" {...a11yProps(1)} />
            <Tab label="Add Customer" {...a11yProps(2)} />
            <Tab label="Companies" {...a11yProps(3)} />
            <Tab label="Customers" {...a11yProps(4)} />
            <Tab label="Update Customer" {...a11yProps(5)} />
            <Tab label="Delete Company" {...a11yProps(6)}/>
            <Tab label="Delete Customer" {...a11yProps(7)}/>

          </Tabs>

        </Box>

        <TabPanel value={value} index={0}>
          <AddCompany/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UpdateCompany/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <AddCustomer/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <GetCompanies/>
          <br/>
          <GetOneCompany/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <GetCustomers/>
          <br/>
          <GetOneCustomer/>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <UpdateCustomer/>
        </TabPanel>
        <TabPanel value={value} index={6}>
        <DeleteCompany/>
        </TabPanel>
        <TabPanel value={value} index={7}>
        <DeleteCustomer/>
        </TabPanel>

        </Container>
        </Fade>
        
      
    
    );
                }
  

  

export default AdminPage;
