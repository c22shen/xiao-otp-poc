import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';


import { Store }        from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SidenavService } from './sidenav.service';

import { Otp }         from './otp.model';
import * as otpActions from './otp.actions';
  
interface AppState {
  otp: Otp;
}

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    otp$: Observable<Otp>;

    constructor(private sidenav: SidenavService, private store: Store<AppState>) {
      this.otp$ = this.store.select('otp');
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('processing request', request);
        // request = request.clone({ responseType: 'text' });
        return next
        .handle(request)
        .retryWhen((errors) => {
            return errors
                  .mergeMap((error) => {
                      console.log("error is", error);
                    if (error.status ===  401 && error.error.error ===  "GTW_AUTH_CHALLENGE") {
                      this.store.dispatch(new otpActions.GetChannels());
                      this.sidenav.setVisibility(true);
                      return this.sidenav.otpStateAnnounced$;
                    } else {
                      return Observable.throw(error);
                    }
                  })
                })
        .do((ev: HttpEvent<any>) => {
            if (ev instanceof HttpResponse) {
              console.log('processing response', ev);
            }
          })
        .catch(response => {
            if (response instanceof HttpErrorResponse) {
                console.log('Processing http error', response);
            }

            return Observable.throw(response);
        });
    }
}