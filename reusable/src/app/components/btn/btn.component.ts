import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {
  @Input() text?: string; // headline submit

  btnClick() {
    console.log(this.text + " was clicked")
  }
}
