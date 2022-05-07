import {Action} from "../actions"
import { ActionType } from "../action-types"

interface LoginDetails {
  token:string|null;
  error:string|null;
  isLogged:boolean|null;
  role?:string|null;
}




const initialState = {
  token:null,
  error:null,
  isLogged:null,
  role:null

}

const reducer = (state :LoginDetails = initialState , action:Action):LoginDetails=>{

  switch(action.type){
    
    case ActionType.LOGIN:{
      return {token: action.payload[0], error:null,isLogged:true, role: action.payload[1]}
    }

    case ActionType.LOGIN_ERROR:{
      return  {token:null, error:action.payload ,isLogged:false, role:null}


    }

    case ActionType.LOGOUT_USER: {
      return { token: null , error:null,isLogged:null, role:null}

    }


    default:{
      return state;
    }
  }
  
}

export default reducer;