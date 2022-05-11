import "./basicModalCoupon.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { CouponModel } from "../../model/couponModel/couponModel";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: '#1d1d1f',
    border: '1px solid #000',
    boxShadow: 30,
    p: 4,
  };

  interface couponProps{
      coupons:CouponModel;
      buttonInfo:string;
      
  }

function BasicModalCoupon(props:couponProps): JSX.Element {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div>
        <Button onClick={handleOpen}>{props.buttonInfo}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title">
              <img src={props.coupons.image} width="42%" height="40%" />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 , color:"#ffffff" , font:"Segoe UI Emoji" , fontSize:"1rem" }}>
              Coupon price : {props.coupons.price}<br/>
              start date : {props.coupons.start_date}<br/>
              end date : {props.coupons.end_date}<br/>
              amount : {props.coupons.amount}
            </Typography>
          </Box>
        </Modal>
      </div>
    );
}

export default BasicModalCoupon;
