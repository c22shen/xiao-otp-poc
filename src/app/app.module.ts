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
import {HttpClientModule} from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavService } from './sidenav.service';
import { OtpChannelComponent } from './otp-channel/otp-channel.component';
import { OtpPasscodeComponent } from './otp-passcode/otp-passcode.component';

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
    FlexLayoutModule
  ],
  providers: [
    LoginService,
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
