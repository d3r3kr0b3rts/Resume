import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  imgs = [
    '../../assets/img/5050stall.jpg',
    '../../assets/img/dropmuskegon.jpg',
    '../../assets/img/flight.jpg',
    '../../assets/img/xup.jpg'    
  ];

}