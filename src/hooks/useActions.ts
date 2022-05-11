import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators,actionCreatorsCustomer } from "../redux-state";

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators,dispatch);
};


export const useActionOnCustomer = () =>{
  const dispatch = useDispatch();
  return bindActionCreators(actionCreatorsCustomer,dispatch);
}