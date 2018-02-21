import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-otp-passcode',
  templateUrl: './otp-passcode.component.html',
  styleUrls: ['./otp-passcode.component.scss']
})
export class OtpPasscodeComponent implements OnInit {
  rForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'passcode' : [null, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(6)])]
    });
  }

  confirmPasscode(passcode) {
    console.log(passcode);
  }

  ngOnInit() {
  }

}
