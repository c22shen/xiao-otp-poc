import { LoginService } from './login.service';
import { SidenavService } from './sidenav.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Otp }         from './otp.model';
import { Store }        from '@ngrx/store';

interface AppState {
  otp: Otp;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login$;
  loginafter$;
  channelList$;
  public openeSidenav = false;
  constructor(
    private LoginService: LoginService,
    private SidenavService : SidenavService,
    private store: Store<AppState> 
  
  ) {
    this.channelList$ = store.select(appState => appState.otp['otpChannels']);
    SidenavService.visibilityAnnounced$.subscribe(
      visibility => {
        this.openeSidenav = visibility;
      });
  }


  login() {
    console.log("I'm in");
    this.login$ = this.LoginService.login();
    this.loginafter$ = this.login$.mergeMap(val=>{ 
      console.log("login call finished!");
      return Observable.of(`Observable done!`)
    });
  }

  // public confirmOTP() {
  //   this.SidenavService.setOTP("Confirmed");
  // }
}
