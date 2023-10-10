import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css'],
})
export class DisplayFormComponent {
  @Input() userData!: any;
  @Output() idFromDisplay = new EventEmitter<any>();
  delID!: any;

  sendIdToParent(id: any) {
    this.idFromDisplay.emit(id);
  }

  // Function to delete from the child component itself
  // deleteID(id: any) {
  //   this.delID = id;
  //   console.log(this.delID);
  //   for(let i=0; i<this.userData.length; i++){
  //     if(this.delID == this.userData[i].id){
  //       // console.log('Value Matched', this.userData[i].task)
  //        this.userData.splice(i,1);
  //     }
  //   }
  // }
}
