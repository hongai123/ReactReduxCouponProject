import "./succsessMessage.css";
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Collapse, IconButton } from "@mui/material";

interface SuccsessProps{
    isSuccesses:boolean;
    sucMessage:string;
    onClickHandle : () => void;
}

function SuccsessMessage(props:SuccsessProps): JSX.Element {
    return (
        <div className="succsessMessage">
        <Box sx={{width:"20%" , position:"fixed" , bottom:"0" , mb:"2%" ,left:0}}>
        <Collapse in={props.isSuccesses}>
        <Alert 
        severity="success"

        action={
            <IconButton
            aria-label="close"
          color="inherit"
          size="small"
          onClick={props.onClickHandle}
          >
            <CloseIcon fontSize="inherit"/>
          </IconButton>
          
        } sx={{mb:2}}>{props.sucMessage}
        
        </Alert>

        </Collapse>


        </Box>
    
        </div>
    );
}

export default SuccsessMessage;
