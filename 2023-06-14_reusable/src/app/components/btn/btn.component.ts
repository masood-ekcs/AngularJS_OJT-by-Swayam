import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent {
  @Input() text?: string; // headline submit, this is coming from the parent app.component

  btnClick() {
    console.log(this.text + ' was clicked');
  }
}
