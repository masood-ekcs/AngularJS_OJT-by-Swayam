import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css'],
})
export class DisplayFormComponent {
  // userData captures the value from the parent component 'userDbFromParent' variable
  @Input() userData!: string;
}
