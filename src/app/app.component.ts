import { LoginService } from './login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  login$;
  constructor(private LoginService: LoginService) {}

  login() {
    this.login$ = this.LoginService.login();
  }
}
