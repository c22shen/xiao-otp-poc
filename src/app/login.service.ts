import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/delay'
import 'rxjs/add/observable/throw'
import 'rxjs/add/observable/of'

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  login(): Observable<Object> {
    return this.http
    .get('/assets/data/login1.json')
    .retryWhen(err => {
      return err.flatMap((err) => {
        console.log(err);


        if (true) {
          return Observable.of(err);
        }
      }

      )

    })
  }



}
