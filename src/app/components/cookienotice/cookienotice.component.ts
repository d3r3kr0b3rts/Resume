import { Component } from '@angular/core';

@Component({
  selector: 'app-cookienotice',
  templateUrl: './cookienotice.component.html',
  styleUrls: ['./cookienotice.component.css']
})
export class CookienoticeComponent {

  message = 'This website uses cookies to improve the user experience.';

  allCookies:string = document.cookie;
  cookieNotice:any = this.allCookies.split('; ').find((row) => row.startsWith('CookieNotice='))?.split('=')[1];
  

  close(){
    document.cookie = "CookieNotice = true";
    this.cookieNotice = "true";
  }

}
