import { Action } from '@ngrx/store';

export function otpReducer(state: string, action: Action) {

    switch(action.type) {
        case '[OTP] Start':
            return state;
        case '[OTP] CHANNEL SELECT':
            return state;
        case '[OTP] CHANNEL RESELECT':
            return state;
        case '[OTP] OTP SUBMIT':
            return state;
        default: 
            return state;
    }
}