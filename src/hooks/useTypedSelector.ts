import {useSelector, TypedUseSelectorHook} from "react-redux"
import {RootState} from "../redux-state"

export const useTypedSelector : TypedUseSelectorHook<RootState> = useSelector;