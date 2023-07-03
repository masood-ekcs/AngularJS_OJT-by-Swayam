import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-first-family',
  templateUrl: './first-family.component.html',
  styleUrls: ['./first-family.component.css']
})
export class FirstFamilyComponent {
  @Input() sonDetails: any;
  showChildren = false;
  showAll = false;
  selectedChild: any;

  toggleChildren() {
    this.showChildren = !this.showChildren;
    this.showAll = false;
  }

  showChildDetails(child: any) {
    this.selectedChild = child;
  }

  showAllChildren() {
    this.showAll = true;
    this.selectedChild = null;
  }
}
