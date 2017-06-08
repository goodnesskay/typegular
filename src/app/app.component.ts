import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: '../assets/templates/app.component.html',
  styleUrls: ['../assets/css/app.component.css']
})

export class AppComponent {
  title = 'app';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  dayo: Hero = {
    id: 1,
    name: 'Goodness'
  };
}
