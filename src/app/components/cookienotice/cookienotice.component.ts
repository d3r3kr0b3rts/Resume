import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './cookienotice.component.html',
  styleUrls: ['./cookienotice.component.css']
})
export class CookienoticeComponent {

  displayNotification: boolean = false;

  message = 'This website uses cookies to improve the user experience.';

  closeNotification(){
    this.displayNotification = true;
    console.log(this.displayNotification);
  }

}
