import * as OtpActions from './otp.actions';
import { OtpChannel } from './otp-channel.model';
import { Otp } from './otp.model';

export type Action = OtpActions.All;

const defaultOtp = new Otp();

export function otpReducer(state: Otp = defaultOtp, action: Action) {

    switch(action.type) {

        case OtpActions.GET_CHANNELS:
            return { ...state, otpChannels: action.payload};
        case OtpActions.GET_CHANNELS_FAILURE:
            return {...state, step: -1, error: action.payload};
        case OtpActions.GET_CHANNELS_SUCCESS:
            return {...state, step: 0, otpChannels: action.payload};
        case OtpActions.GEN_OTP:
            return state;
        case OtpActions.GEN_OTP_FAILURE:
            return {...state, step: -1, error: action.payload};
        case OtpActions.GEN_OTP_SUCCESS:
            return {...state, step: 1};
        case OtpActions.VALIDATE_OTP:
            return state;
        case OtpActions.VALIDATE_OTP_FAILURE:
            return {...state, step: -1, error: action.payload};
        case OtpActions.VALIDATE_OTP_SUCCESS:
            return {...state};
        case OtpActions.CHANNEL_RESELECT:
            return {...state, step: 0}
        default:
            return state;
    }
}