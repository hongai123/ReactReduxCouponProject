import "./errorMessage.css";
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Collapse, IconButton } from "@mui/material";

interface ErrorProps{
    isError:boolean;
    myError:string;
    onClickHandle : () => void;
}



function ErrorMessage(props:ErrorProps): JSX.Element {
    return (
        <Box sx={{width:"20%" , position:"fixed" , bottom:"0" , mb:"2%" ,left:0}}>
        <Collapse in={props.isError}>
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
          
        } sx={{mb:2}}>{props.myError}
        
        </Alert>

        </Collapse>


        </Box>
    );
}

export default ErrorMessage;
