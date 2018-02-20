import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpChannelComponent } from './otp-channel.component';

describe('OtpChannelComponent', () => {
  let component: OtpChannelComponent;
  let fixture: ComponentFixture<OtpChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
