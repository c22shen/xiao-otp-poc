import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OtpService } from '../otp.service';
import { OtpChannel } from '../otp-channel.model';

@Component({
  selector: 'app-otp-channel',
  templateUrl: './otp-channel.component.html',
  styleUrls: ['./otp-channel.component.scss']
})
export class OtpChannelComponent implements OnInit {
  @Input() channelList: OtpChannel;
  rForm: FormGroup;
  objectKeys = Object.keys;
  channels$;
  constructor(private fb: FormBuilder, private otpService: OtpService) { 
    this.rForm = fb.group({
      'channel' : [null, Validators.required],
    });
  }

  generateOtp(channelSelected) {
    this.channels$ = this.otpService.generateOtp(channelSelected);
  }


  ngOnInit() {
  }

}
