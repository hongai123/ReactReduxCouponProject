import "./adminPage.css";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddCompany from "../actions/addCompany/addCompany";
import UpdateCompany from "../actions/updateCompany/updateCompany";
import AddCustomer from "../actions/addCustomer/addCustomer";





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

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', position:"absolute" , top:"5%" }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Add Company" {...a11yProps(0)} />
            <Tab label="Update Company" {...a11yProps(1)} />
            <Tab label="ADD CUSTOMER" {...a11yProps(2)} />
            <Tab label="Item four" {...a11yProps(3)} />

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
          Item Three
        </TabPanel>
        
      </Box>
      
    
    );
                }
  

  

export default AdminPage;
