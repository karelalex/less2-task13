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
  mainChange(e): void {
    this.mainInputText = e.target.value;
  }
  normalChange(value): void {
    this.normalComponentText = value;
  }
  pushChange(value): void {
    this.pushComponentText = value;
  }
}
