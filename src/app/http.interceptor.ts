import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpErrorResponse,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { SidenavService } from './sidenav.service';
  
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

    constructor(private sidenav: SidenavService) {}
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