import { LoginService } from './login.service';
import { SidenavService } from './sidenav.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login$;
  loginafter$;
  public openeSidenav = false;
  constructor(
    private LoginService: LoginService,
    private SidenavService : SidenavService
  
  ) {
    SidenavService.visibilityAnnounced$.subscribe(
      visibility => {
        this.openeSidenav = visibility;
      });
  }


  login() {
    console.log("I'm in");
    this.login$ = this.LoginService.login();
    this.loginafter$ = this.login$.mergeMap(val=> Observable.of(`Observable done!`));
  }

  public confirmOTP() {
    this.SidenavService.setOTP("Confirmed");
  }
}
