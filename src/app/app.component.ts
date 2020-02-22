import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MY FAMILY';

  people = [{
    name: 'Sarah',
    gender: 'female',
    occupation: 'implementation expert',
    age: 20
  },
  {
    name: 'kingsley',
    gender: 'male',
    occupation: 'banker',
    age: 18
  },
  {
    name: 'Chigo',
    gender: 'male',
    occupation: 'student',
    age: 15
  },
  {    
    name: 'Kachi',
    gender: 'male',
    occupation: 'student',
    age: 17
  
  }

  ];
}
