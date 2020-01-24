import { Dispatch } from "react";
import { MOBILE_STUDENT_CARD_ON } from "./types.d";

interface IDispatch {
    type: string
}

export const mobileStudentCardOn = (dispatch: Dispatch<IDispatch>) => {
    dispatch({
        type: MOBILE_STUDENT_CARD_ON
    })
}

