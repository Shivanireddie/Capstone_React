import { REDUCER_CONSTANTS } from "../constants";
const initialState = {
    isReceiverValidByName_Message: "",
    isReceiverValidById_Message: "",
    inSufficientBalance_Message: "",
    senderNotFound_Message: "",
    receiverNotFound_Message: "",
    bankDetails: [],
    transactionDetails: [],
    transactionMsg: "",
    fetchmsg: ""
}
export const Transaction = (state = initialState, action) => {

    switch (action.type) {
        case REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_NAME_TRUE:
            return { ...state, isReceiverValidByName: false, isReceiverValidByName_Message: action.data }
        case REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_NAME_FALSE:
            return { ...state, isReceiverValidByName: false, isReceiverValidByName_Message: action.data }
        case REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_ID_TRUE:
            return { ...state, isReceiverValidById: false, isReceiverValidById_Message: action.data }
        case REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_ID_FALSE:
            return { ...state, isReceiverValidById: false, isReceiverValidById_Message: action.data }
        case REDUCER_CONSTANTS.SENDER_NOT_FOUND:
            return { ...state, senderNotFound_Message: action.data }
        case REDUCER_CONSTANTS.SENDER_FOUND:
            return { ...state, senderNotFound_Message: action.data }
        case REDUCER_CONSTANTS.RECEIVER_NOT_FOUND:
            return { ...state, receiverNotFound_Message: action.data }
        case REDUCER_CONSTANTS.RECEIVER_FOUND:
            return { ...state, senderNotFound_Message: action.data }
        case REDUCER_CONSTANTS.INVALID_AMOUNT_TRUE:
            return { ...state, inSufficientBalance_Message: action.data }
        case REDUCER_CONSTANTS.INVALID_AMOUNT_FALSE:
            return { ...state, inSufficientBalance_Message: action.data }
        case REDUCER_CONSTANTS.BANK_API_FAILURE:
            return { ...state, fetchmsg: action.data }
        case REDUCER_CONSTANTS.BANK_API_SUCCESS:
            return { ...state, fetchmsg: "", bankDetails: action.data }
        case REDUCER_CONSTANTS.INSERTION_FAILURE:
            return { ...state, transactionMsg: action.data }
        case REDUCER_CONSTANTS.INSERTION_SUCCESS:
            return { ...state, transactionMsg: action.data }
        default:
            return { ...state }

    }
}






