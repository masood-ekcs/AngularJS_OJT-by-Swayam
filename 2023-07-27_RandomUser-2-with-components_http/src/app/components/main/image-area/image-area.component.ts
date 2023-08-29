import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-area',
  templateUrl: './image-area.component.html',
  styleUrls: ['./image-area.component.css'],
})
export class ImageAreaComponent {
  @Input() randomOutput!: any;
}
