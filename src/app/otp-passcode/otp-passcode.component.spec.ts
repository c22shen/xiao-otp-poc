import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpPasscodeComponent } from './otp-passcode.component';

describe('OtpPasscodeComponent', () => {
  let component: OtpPasscodeComponent;
  let fixture: ComponentFixture<OtpPasscodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpPasscodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpPasscodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
