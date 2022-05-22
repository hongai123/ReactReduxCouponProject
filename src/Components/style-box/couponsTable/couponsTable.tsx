import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CouponModel } from "../../model/couponModel/couponModel";
import RemoveFromCartBut from '../../shop/removeFromCartBut/removeFromCartBut';
import BuyAll from '../../shop/buyAll/buyAll';
import "./couponsTable.css"


interface CouponProps{
    coupons:CouponModel[]
}

export default function CouponTable( props:CouponProps) {
    const [totaPrice, setTotal] = React.useState(0);
    let allSum = 0;

    React.useEffect(()=>{

    },[])

    const addSum = (price:number):number=>{
        allSum += price;
        return price;
    }

    const setTotalPrice = ():number=>{
        setTotal(allSum)
        return totaPrice;
    }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth:"100%" }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={3}>
              Coupons In Cart
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Coupon Name</TableCell>
            <TableCell align="right">IMG</TableCell>
            <TableCell align="right" >Delete</TableCell>
            <TableCell align="right">Price</TableCell>


          </TableRow>
    

        </TableHead>
        <TableBody>
          {props.coupons.map((co) => (
            <TableRow key={co.coupon_id}>
              <TableCell>{co.title}</TableCell>
              <TableCell align="right"> <img id="smallImageCoupon" src={co.image}/></TableCell>
              <TableCell align="right"><RemoveFromCartBut coupon={co}/></TableCell>
              <TableCell align="right">{addSum(co.price)}</TableCell>

            </TableRow>

          )
            
          )}
          <TableRow>
            <TableCell rowSpan={3} />
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total Price: {allSum} </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={1}> <BuyAll/> </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
