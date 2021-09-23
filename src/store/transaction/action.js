import { REDUCER_CONSTANTS } from "../constants";
import { customerDetails } from "../../constants/customers";
//import fraudList from "../../fraudlist.txt";
import axios from "axios";
export const bankApiSuccess = (data) => {
    return {
        type: REDUCER_CONSTANTS.BANK_API_SUCCESS,
        data: data
    }
};
export const bankApiFailure = () => {
    return {
        type: REDUCER_CONSTANTS.BANK_API_FAILURE,
        data: 'Unable to fetch your details rightnow try after some time!!'
    }
};
export const insertionsuccess = () => {
    return {
        type: REDUCER_CONSTANTS.INSERTION_SUCCESS,
        data:'Transaction Successfull'
        
    }
};
export const insertionfailure = () => {
    return {
        type: REDUCER_CONSTANTS.INSERTION_FAILURE,
        data: 'Unable to fetch your details rightnow try after some time!!'
    }
};


export const restrictedReceiverByNameTrue = () => {
    return {
        type: REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_NAME,
        data: 'cannot transfer to this user!'
    }
};
export const restrictedReceiverByNameFalse = () => {
    return {
        type: REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_NAME,
        data: ''
    }
};

export const restrictedReceiverByIdTrue = () => {
    return {
        type: REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_ID,
        data: 'Cannot transfer to this account'
    }

}
export const restrictedReceiverByIdFalse = () => {
    return {
        type: REDUCER_CONSTANTS.RESTRICTED_RECEIVER_BY_ID,
        data: ''
    }

}
export const senderNotFound = () => {
    return {
        type: REDUCER_CONSTANTS.SENDER_NOT_FOUND,
        data: "Invalid sender account"
    }
}
export const senderFound = () => {
    return {
        type: REDUCER_CONSTANTS.SENDER_FOUND,
        data: ""
    }
}
export const receiverNotFound = () => {
    return {
        type: REDUCER_CONSTANTS.RECEIVER_NOT_FOUND,
        data: "Invalid receiver account"
    }
}
export const receiverFound = () => {
    return {
        type: REDUCER_CONSTANTS.RECEIVER_FOUND,
        data: ""
    }
}
export const inValidAmountTrue = () => {
    return {
        type: REDUCER_CONSTANTS.INVALID_AMOUNT,
        data: 'Insufficient balance'
    }
}
export const inValidAmountFalse = () => {
    return {
        type: REDUCER_CONSTANTS.INVALID_AMOUNT,
        data: ''
    }
}
export const validateTransaction = (data) => {
    return async (dispatch) => {
        let flags = { sendernotfound: false, receivernotfound: false, restrictedId: false, restrictedName: false }
        try {

            let senderData = customerDetails.find(o => o.customerId === data.senderId);
            if (!senderData) {
                flags = { ...flags, sendernotfound: true }
                console.log("")
                dispatch(senderNotFound());
            }
            else {
                dispatch(senderFound())
            }

            let receiverData = customerDetails.find(o => o.customerId === data.receiverId);
            if (!receiverData) {
                flags = { ...flags, receivernotfound: true }
                dispatch(receiverNotFound());
            }
            else {
                dispatch(receiverFound());
                if (checkifRestrictedId(data.receiverId)) {
                    flags = { ...flags, restrictedId: true }
                    dispatch(restrictedReceiverByIdTrue());
                }
                else {
                    dispatch(restrictedReceiverByIdFalse());
                }

                // if (checkFraudList(data.receiverName)) {
                //     flags = { ...flags, restrictedName: true }
                //     dispatch(restrictedReceiverByNameTrue());
                // }
                // else {
                //     dispatch(restrictedReceiverByNameFalse());
                // }
            }
            if (!flags.sendernotfound && !flags.receivernotfound && !flags.restrictedId && !flags.restrictedName) {
                if (!validAmount(data.amount, senderData)) {
                    dispatch(inValidAmountTrue())
                }
                else {
                    dispatch(inValidAmountFalse())
                }
            }

        }
        catch (ex) {

        }
    }

}
export const checkSenderAccountTypeIfOverDraw = (senderData) => {
    if (senderData.overDraw === true) {
        return true
    }
    else {
        return false
    }
}
export const validAmount = (amount, senderData) => {
    if (!checkSenderAccountTypeIfOverDraw(senderData)) {
        if (amount > senderData.clearBalance) {
            return false
        }
        else {
            return true
        }
    }
}
export const checkifRestrictedId = (receiverId) => {
    const bankaccounts = [
        { id: '9704335801' },
        { id: '9701107184' },
        { id: '9704089004' },
    ]
    const found = bankaccounts.find(x => x.id === receiverId);
    if (found) {
        return true
    }
    else {
        return false
    }
}
// export const checkFraudList = (receiverName) => {
//     let boolvalue = fetch(fraudList).then((response) => response.text()).then(text => {
//         if (text.toLowerCase().includes(receiverName.toLowerCase())) {
//             return true
//         }
//         else {
//             return false
//         }
//     });

// }
export const getBank = (bic) => {
    return async (dispatch) => {
        try {
            let url = "http://localhost:8080/bank/" + bic;
            let data = await axios.get(url)
            data = data.data
            //console.log(data)
            return dispatch(bankApiSuccess(data));

        }
        catch (ex) {
            console.log("catch called");
            return dispatch(bankApiFailure());
        }
    }
}
