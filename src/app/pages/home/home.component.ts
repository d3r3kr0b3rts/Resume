import { Component } from '@angular/core';

import { AngularDeviceInformationService } from 'angular-device-information';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  desktop:any = [];

  constructor(private deviceInformationService: AngularDeviceInformationService) {

    this.desktop = deviceInformationService;

    
  }
}
