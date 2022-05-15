import "./customerTable.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { customerModel } from "../../model/customerModel/customerModel";



interface customerSingleProp{
    customer : customerModel
}

interface customersProp{
    customer :customerModel[]
}


function Row(props: customerSingleProp) {
    const [open, setOpen] = React.useState(false);
    const customer = props.customer;
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {customer.id}
          </TableCell>
          <TableCell>{customer.firstName}</TableCell>
          <TableCell>{customer.lastName}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Coupons
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>amount</TableCell>
                      <TableCell>start-date</TableCell>
                      <TableCell>end-date</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {customer.coupons.map((coupon) => (
                      <TableRow key={coupon.coupon_id}>
                        <TableCell component="th" scope="row">
                          {coupon.title}
                        </TableCell>
                        <TableCell>{coupon.description}</TableCell>
                        <TableCell>{coupon.amount}</TableCell>
                        <TableCell>{coupon.start_date}</TableCell>
                        <TableCell>{coupon.end_date}</TableCell>
                        <TableCell align="right">
                          {coupon.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }


function CustomerTable(props:customersProp): JSX.Element {
    return (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>ID</TableCell>
                <TableCell>name</TableCell>
                <TableCell>last name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.customer.map((customers) => (
                <Row customer={customers} key={customers.id} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}


export default CustomerTable;
