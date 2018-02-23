import { LoginService } from './login.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { 
  FormsModule,
  ReactiveFormsModule 
} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavService } from './sidenav.service';
import { OtpChannelComponent } from './otp-channel/otp-channel.component';
import { OtpPasscodeComponent } from './otp-passcode/otp-passcode.component';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpInterceptorService } from './http.interceptor';



import { StoreModule } from '@ngrx/store';
import { otpReducer } from './otp.reducer';
import { OtpService } from './otp.service';


@NgModule({
  declarations: [
    AppComponent,
    OtpChannelComponent,
    OtpPasscodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Flex-layout
    FlexLayoutModule,
    StoreModule.forRoot({ otp: otpReducer})
  ],
  providers: [
    LoginService,
    OtpService,
    SidenavService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
