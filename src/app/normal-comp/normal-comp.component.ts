import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-normal-comp',
  templateUrl: './normal-comp.component.html',
  styleUrls: ['./normal-comp.component.css']
})
export class NormalCompComponent implements OnInit {
  normalTextInput = 'normal';
  @Output() changed = new EventEmitter();
  normalChange(e): void {
    const value = e.target.value;
    this.normalTextInput = value;
    this.changed.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
