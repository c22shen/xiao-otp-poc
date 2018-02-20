import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-otp-channel',
  templateUrl: './otp-channel.component.html',
  styleUrls: ['./otp-channel.component.scss']
})
export class OtpChannelComponent implements OnInit {
  rForm: FormGroup;
  objectKeys = Object.keys;
  channel:string = '';

  channelSelection = {
      "primaryPhone": "******0597",
      "alternatePhone": "******3082",
      "email": "K*************I@CAPGEMINI.COM"
  }

  confirmChannel(channel) {
    console.log("Channel Submitted");
  }


  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'channel' : [null, Validators.required],
    });
  }

  ngOnInit() {
  }

}
