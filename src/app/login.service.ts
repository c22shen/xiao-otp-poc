import { HttpClient } from '@angular/common/http';
import {Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { SidenavService } from './sidenav.service';

import 'rxjs/add/operator/retry'
import 'rxjs/add/operator/retryWhen'
import 'rxjs/add/operator/mergeMap'
import 'rxjs/add/operator/delay'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/take'
import 'rxjs/add/operator/concat'
import "rxjs/add/observable/of";

@Injectable()
export class LoginService {

  constructor(
    private http: HttpClient, 
    private sidenav: SidenavService
  ) {}

  login(): Observable<Object> {
    console.log("login function");
    return this.http
    .get('/assets/data/login1.json')
    .retryWhen((errors) => {
      return errors
            .mergeMap((error) => {
              console.log(error, error);
              if (error.status ===  404) {
                this.sidenav.setVisibility(true);
                return this.sidenav.otpStateAnnounced$;
              } else {
                return Observable.throw(error);
              }
            })
          })
      }  
    }
