import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {

  links = {
    'Harvard edX': 'https://www.edx.org/',
    'MIT OpenCourseware': 'https://ocw.mit.edu/',
    'freecodecamp.org': 'https://www.freecodecamp.org/',
    'procademy': 'https://en.procademy.nl/',
    'Derek Banas': 'https://www.youtube.com/@derekbanas',
    'Traversy Media': 'https://www.youtube.com/@TraversyMedia',
    'Stack Overflow': 'https://stackoverflow.com/'
  };

}
