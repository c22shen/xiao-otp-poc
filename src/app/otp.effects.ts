import { Injectable }                 from '@angular/core';
import { Effect, Actions }            from '@ngrx/effects';
import { Otp }                       from './otp.model';

import { Observable }                 from 'rxjs/Observable';
import { of }                         from 'rxjs/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';



import * as otpActions from './otp.actions';
import { OtpService }  from './otp.service';
export type Action = otpActions.All;

@Injectable()
export class OtpEffects {
    constructor(private actions: Actions, private otpService: OtpService) {}

    @Effect()
    getChannel$:  Observable<Action> = this.actions
        .ofType(otpActions.GET_CHANNELS) 
        .mergeMap(action => this.otpService.getChannels())
        .map(channels => {
            return new otpActions.GetChannelsSuccess(channels);
        })
        .catch(err => of(new otpActions.GetChannelsFailure({})));
}
