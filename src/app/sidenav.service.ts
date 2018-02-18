import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SidenavService {

  // Observable string sources
  private sidenavVisibilitySource = new Subject<boolean>();
  private confirmOTPSource = new Subject<String>();

  // Observable boolean streams
  visibilityAnnounced$ = this.sidenavVisibilitySource.asObservable();
  otpStateAnnounced$ = this.confirmOTPSource.asObservable();

  // Service message commands
  setVisibility(visibility: boolean) {
    this.sidenavVisibilitySource.next(visibility);
  }

    // Service message commands
  setOTP(state: String) {
    this.confirmOTPSource.next(state);
  }
  constructor() { }

}
