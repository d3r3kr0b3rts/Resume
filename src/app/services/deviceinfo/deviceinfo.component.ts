import { Component } from '@angular/core';
import { AngularDeviceInformationService } from 'angular-device-information';

@Component({
  selector: 'app-deviceinfo',
  template: '',
})
export class DeviceinfoComponent {


  code:string = '';

  deviceInfo: any;
  constructor(private deviceInformationService: AngularDeviceInformationService) {
    this.deviceInfo = deviceInformationService;
    this.code = JSON.stringify(this.deviceInfo);
  }



}
