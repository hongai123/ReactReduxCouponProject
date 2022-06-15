import "./errorMessage.css";
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Collapse, IconButton } from "@mui/material";
import Snackbar from '@mui/material/Snackbar';

interface ErrorProps{
    isError:boolean;
    myError:string;
    onClickHandle : () => void;
}



function ErrorMessage(props:ErrorProps): JSX.Element {
  let message = props.myError.replace(/[|&;$%@<>"()+,{\\}/]/g, "").replace(/[:]/g, "thisShit ");
  let finalMessage = message.substring(message.lastIndexOf("thisShit ")+8)
      if(props.myError.includes("Token")){
        finalMessage = "Token has expired"
      }


    return (
        <Box sx={{width:"20%" , position:"fixed" , bottom:"0" , mb:"2%" ,left:0}}>
        <Snackbar open={props.isError} autoHideDuration={5000} onClose={props.onClickHandle}>
        <Alert 
        severity="error"

        action={
            <IconButton
            aria-label="close"
          color="inherit"
          size="small"
          onClick={props.onClickHandle}
          >
            <CloseIcon fontSize="inherit"/>
          </IconButton>
          
        } sx={{mb:2}}>{finalMessage}
        
        </Alert>
        </Snackbar>

        



        </Box>
    );
}

export default ErrorMessage;
