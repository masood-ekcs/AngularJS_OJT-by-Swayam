import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent {
  // 'alertValue' holds the value from the parent component 'alertMessageFromParentComponent'
  @Input() alertValue!: string;
  @Input() userData!: string;
}
