import { LoginService } from './login.service';
import { SidenavService } from './sidenav.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login$;
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
    this.login$ = this.LoginService.login();
  }

  public confirmOTP() {
    this.SidenavService.setOTP("Confirmed");
  }
}
