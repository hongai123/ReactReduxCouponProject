import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionType } from '../action-types'
import { Action } from '../actions'

export const logMe = (term:{username:string, password:string, role:string})=>{
  return async(dispatch:Dispatch<Action>) => {

    
    try {
      const url = `http://localhost:8080/token/log/${term.role}`
      let myToken = "";

      await axios
      .post(url,{
        username: term.username,
        password: term.password
      }
      )
      .then((response)=>{
        console.log(response)
        myToken = response.headers.authorization;
        console.log("im in response")
        dispatch({
          type:ActionType.LOGIN,
          payload : [myToken,term.role]
        })

       
        
      })
      .catch((error)=>{
        console.log("Im here")
        console.log(error)
        dispatch({
          type : ActionType.LOGIN_ERROR,
          payload : error
        })
        //localStorage.setItem("wrong","wrongDetails")
      })


     

      //localStorage.setItem("token",myToken)

      
      
    } catch (error:any) {
      console.log(error)
      dispatch({
        type : ActionType.LOGIN_ERROR,
        payload : error
      })
      console.log("im here?")

    }

  }

}

export const logMeOut = ()=>{
return async(dispatch:Dispatch<Action>)=>{
  dispatch({
    type: ActionType.LOGOUT_USER
  })
}
}