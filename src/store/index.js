import { combineReducers } from 'redux'
import { Auth } from "./auth"
import {Customer} from "./customer"
import {Transaction} from "./transaction"
const rootReducer = combineReducers({
    Auth,
    Customer,
    Transaction,
    
});
export default rootReducer;