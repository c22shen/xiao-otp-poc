import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { OtpChannel } from './otp-channel.model';


@Injectable()
export class OtpService {


  
  constructor(
    private http: HttpClient
  ){}

  
	// { 
  //   "userName":"0000009805894"
  // }


   getChannels(): Observable<OtpChannel> {
    return this.http
    .post<OtpChannel>("/api/userchannels", {});
  }

  generateOtp(channelSelected): Observable<any> {
    console.log(channelSelected);
    return this.http
    .post<any>("/api/generateotp", channelSelected);
  }


}
