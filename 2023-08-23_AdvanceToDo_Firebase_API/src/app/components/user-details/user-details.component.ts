import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  // @Input() item!: any;
  getUsers!: any;
  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.auth.getUsers().subscribe((res) => {
      console.log(res);
      this.getUsers = res;
    });
  }
}
