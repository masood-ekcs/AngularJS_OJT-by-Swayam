import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css'],
})
export class UserItemComponent {
  @Input() name!: String;
  @Input() number!: number;
  @Input() image!: any;

  @Input() data?: any;
  constructor() {}
}
