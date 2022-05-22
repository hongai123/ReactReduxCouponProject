import { IconButton } from "@mui/material";
import "./removeFromCartBut.css";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { useActionOnCart } from "../../../hooks/useActions";
import { CouponModel } from "../../model/couponModel/couponModel";

interface propsCo{
    coupon:CouponModel;
}

function RemoveFromCartBut(props:propsCo): JSX.Element {
    const {RemoveFromCart} = useActionOnCart();

    const onClick = ()=>{
        const term = {
            coupon:props.coupon
        }
        RemoveFromCart(term)
    }

    return (
        <IconButton onClick={onClick}>
        <RemoveShoppingCartIcon/>
        </IconButton>
    );
}

export default RemoveFromCartBut;
