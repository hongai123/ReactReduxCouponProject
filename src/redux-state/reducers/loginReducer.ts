import {Action} from "../actions"
import { ActionType } from "../action-types"

interface LoginDetails {
  token:string|null;
  error:string|null;
  isLogged:boolean|null;
}




const initialState = {
  token:null,
  error:null,
  isLogged:null

}

const reducer = (state :LoginDetails = initialState , action:Action):LoginDetails=>{

  switch(action.type){
    
    case ActionType.LOGIN:{
      return {token: action.payload, error:null,isLogged:true}
    }

    case ActionType.LOGIN_ERROR:{
      return  {token:null, error:action.payload ,isLogged:false}


    }

    case ActionType.LOGOUT_USER: {
      return { token: null , error:null,isLogged:null}

    }


    default:{
      return state;
    }
  }
  
}

export default reducer;