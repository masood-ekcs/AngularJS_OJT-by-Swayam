import { Component } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent {
    name: String;
    phone: number;
    constructor(){
      this.name = "Masood",
      this.phone = 123232
    }
}
