import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { OtpChannel } from './otp-channel.model';


@Injectable()
export class OtpService {


  
  constructor(
    private http: HttpClient
  ){}

   getChannels(): Observable<OtpChannel> {
    console.log("getChannels function");
    return this.http
    .post<OtpChannel>("/api/userchannels", {})

  }


}
