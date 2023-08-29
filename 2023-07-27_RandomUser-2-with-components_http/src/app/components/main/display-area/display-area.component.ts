import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-display-area',
  templateUrl: './display-area.component.html',
  styleUrls: ['./display-area.component.css'],
})
export class DisplayAreaComponent {
  @Input() randomOutput!: any;

  constructor(public myService: DataService) {}
}
