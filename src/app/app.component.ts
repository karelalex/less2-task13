import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mainInputText = 'Привет';
  title = 'less2-task13';
  normalComponentText = '';
  pushComponentText = '';
  mainChange(value): void {
    this.mainInputText = value;
  }
  normalChange(value): void {
    this.normalComponentText = value;
  }
  pushChange(value): void {
    this.pushComponentText = value;
  }
}
