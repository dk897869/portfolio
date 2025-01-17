// projects.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    { name: 'ECommerce Website', description: 'Ecommerce Website for handling all online shopping related works.', link: '#https://github.com/dk897869/Ecommerce--Website' },
    { name: 'Tour & Travel Website', description: 'Online ticket booking website.', link: '#https://github.com/dk897869/TravelTrip' },
    { name: 'Weather Forecasting ', description: 'Weather report check online for our city.', link: '#' },
  ];
https: any;
}
