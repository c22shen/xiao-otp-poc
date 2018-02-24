import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

export interface Channel {
  type: string;
}


@Injectable()
export class OtpService {


  
  constructor(
    private http: HttpClient
  ){}

   getChannels(): Observable<Channel[]> {
    console.log("getChannels function");
    return this.http
    .post<Channel[]>("/api/userchannels", {})

  }


}
