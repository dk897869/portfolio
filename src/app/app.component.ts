import { Component, CUSTOM_ELEMENTS_SCHEMA, } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userInput = '';

  title = 'task';
altText: any;
}
