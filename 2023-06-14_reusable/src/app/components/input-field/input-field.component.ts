import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent {
  @Input() name?: string; // CTA Text, HEADLINE Text, BANNER Text, Ads Text
  @Input() isInput?: boolean; // true, false, false, true
  @Input() id?: string; // 1, 2, 3, 4
}
