import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtpService } from '../otp.service';

@Component({
  selector: 'app-otp-channel',
  templateUrl: './otp-channel.component.html',
  styleUrls: ['./otp-channel.component.scss']
})
export class OtpChannelComponent implements OnInit {
  rForm: FormGroup;
  objectKeys = Object.keys;
  // channel:string = '';
  channels$;
  constructor(private fb: FormBuilder, private otpService: OtpService) { 
    this.rForm = fb.group({
      'channel' : [null, Validators.required],
    });
  }


  confirmChannel(chanel) {
    console.log("Channel Submitted");
    this.channels$ = this.otpService.getChannels();
  }




  ngOnInit() {
  }

}
