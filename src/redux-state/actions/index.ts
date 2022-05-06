import { ActionType } from "../action-types"


export type Action =
Login|ErrorLogin|Logout


interface Login {
  type:ActionType.LOGIN
  payload:string;
}

interface ErrorLogin {
  type:ActionType.LOGIN_ERROR
  payload:string;
}

interface Logout {
  type:ActionType.LOGOUT_USER
  payload?:string;
}
