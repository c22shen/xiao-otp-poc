import { OtpChannel } from './otp-channel.model';

export interface IOtp {
    step?: number;
    challengeType?: string;
    primePhoneInd?: boolean;
    otpCode?: number;
    error?: string;
    otpChannels?: OtpChannel;
}

export class Otp implements IOtp {
    constructor() {}
}
