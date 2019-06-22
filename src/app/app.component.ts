import { Component } from '@angular/core';
import sampleData from './data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'escribanias';
  Escribanias: any = sampleData;
}


