import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css'],
})
export class DisplayFormComponent {
  @Input() userData!: any;
  delID!: any;

  deleteID(id: any) {
    // this.delID = id;
    // console.log(this.delID);
    console.log(this.userData);
  }
}
