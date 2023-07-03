import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  user = [
    { name: "Masood", number: 12312, myImage: "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=" },
    { name: "Swayam", number: 234, myImage: "https://img.freepik.com/free-photo/tree-with-blurred-background_1339-3057.jpg?w=1800&t=st=1684811905~exp=1684812505~hmac=392692b413b37e1827cbe690ecef872b1e544fb46f55383b36e40c5f1291b9af" },
    { name: "Ayush", number: 10101 }
  ]

  trialPhone: number

  constructor() {

    this.trialPhone = 13423423
  }
}
