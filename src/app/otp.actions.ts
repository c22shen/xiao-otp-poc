import { Action } from '@ngrx/store';
// import { Otp } from './otp.model';
import { OtpChannel } from './otp-channel.model';

export const GET_CHANNELS  = "[OTP] Channel Get";
export const GET_CHANNELS_SUCCESS  = "[OTP] Channel get success";
export const GET_CHANNELS_FAILURE  = "[OTP] Channel get failure";

export const GEN_OTP  = "[OTP] Generate";
export const GEN_OTP_SUCCESS  = "[OTP] Generate success";
export const GEN_OTP_FAILURE  = "[OTP] Generate failure";

export const VALIDATE_OTP  = "[OTP] Validate";
export const VALIDATE_OTP_SUCCESS  = "[OTP] Validate success";
export const VALIDATE_OTP_FAILURE  = "[OTP] Validate failure";

export const CHANNEL_RESELECT  = "[OTP] Channel reselect";

export const ERROR_DISMISS  = "[OTP] Error dismiss";


export class GetChannels implements Action {
    readonly type = GET_CHANNELS;
    constructor(public payload?: any) {}
}
  
export class GetChannelsSuccess implements Action {
    readonly type = GET_CHANNELS_SUCCESS;
    constructor(public payload: OtpChannel) {}
}

// Show Error Message
export class GetChannelsFailure implements Action {
    readonly type = GET_CHANNELS_FAILURE;
    constructor(public payload?: any) {}
}


export class generateOtp implements Action {
    readonly type = GEN_OTP;
    constructor(public payload?: any) {}
}

export class generateOtpSuccess implements Action {
    readonly type = GEN_OTP_SUCCESS;
    constructor(public payload?: any) {}
}

// Show Error Message
export class generateOtpFailure implements Action {
    readonly type = GEN_OTP_FAILURE;
    constructor(public payload?: any) {}
}

export class validateOtp implements Action {
    readonly type = VALIDATE_OTP;
    constructor(public payload?: any) {}
}

export class validateOtpSuccess implements Action {
    readonly type = VALIDATE_OTP_SUCCESS;
    constructor(public payload?: any) {}
}

// Show Error Message
export class validateOtpFailure implements Action {
    readonly type = VALIDATE_OTP_FAILURE;
    constructor(public payload?: any) {}
}

// Show Error Message
export class otpChannelReselect implements Action {
    readonly type = CHANNEL_RESELECT;
    constructor(public payload?: any) {}
}

// Show Error Message
export class otpErrorDismiss implements Action {
    readonly type = ERROR_DISMISS;
    constructor(public payload?: any) {}
}

export type All
  = GetChannels
  | GetChannelsSuccess
  | GetChannelsFailure
  | generateOtp
  | generateOtpSuccess
  | generateOtpFailure
  | validateOtp
  | validateOtpSuccess
  | validateOtpFailure
  | otpChannelReselect
  | otpErrorDismiss;




