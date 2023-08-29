import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() hasPs!: boolean;
  @Input() hasNt!: boolean;
  @Output() pButtonClicked = new EventEmitter();
  @Output() nButtonClicked = new EventEmitter();

  pButton() {
    this.pButtonClicked.emit();
  }
  nButton() {
    this.nButtonClicked.emit();
  }

  // hasP() {
  //   this.hasPb.emit();
  // }
  // hasN() {
  //   this.hasNb.emit();
  // }
}
