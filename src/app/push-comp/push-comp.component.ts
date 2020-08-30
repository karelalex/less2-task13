import {Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-push-comp',
  templateUrl: './push-comp.component.html',
  styleUrls: ['./push-comp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PushCompComponent implements OnInit {
  @Input() baba = '';
  pushTextInput = 'push';
  @Output() changed = new EventEmitter();
  pushChange(value): void {
    this.pushTextInput = value;
    this.changed.emit(value);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
