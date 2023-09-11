import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  // myButtonColor: string = 'bg-warning text-danger';

  // @Input() myButtonColor: string = 'bg-warning text-danger';
  @Input() myClass: string = 'bg-warning';
  @Input() myIcon!: string;
  @Input() myStyles: any = {};
}
