import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent {
  @Input() childrenDetails: any;
  showDetails = false;

  showChildDetails() {
    this.showDetails = !this.showDetails;
  }

}
