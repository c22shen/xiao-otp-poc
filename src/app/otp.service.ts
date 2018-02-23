import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class OtpService {

  constructor(
    private http: HttpClient
  ){}

   getChannels(): Observable<Object> {
    console.log("getChannels function");
    return this.http
    .get('/assets/data/getchannels.json')
  }


}
