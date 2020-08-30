import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-push-comp',
  templateUrl: './push-comp.component.html',
  styleUrls: ['./push-comp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushCompComponent implements OnInit {
  pushTextInput = 'push';
  @Output() changed = new EventEmitter();
  pushChange(e): void {
    const value = e.target.value;
    this.pushTextInput = value;
    this.changed.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
