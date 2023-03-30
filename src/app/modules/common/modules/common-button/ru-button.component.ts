import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ru-button',
  templateUrl: './ru-button.component.html',
  styleUrls: ['./ru-button.component.scss'],
})
export class RuButtonComponent {
  @Input() bText!: string;
  @Input() bClass!: string;
  @Input() bIcon!:string
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  bClick() {
    this.btnClick.emit();
  }
}
