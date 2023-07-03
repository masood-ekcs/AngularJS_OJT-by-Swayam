import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'familyTree';

  firstFamilyDetails = [
    {
      son: { firstName: "Shantanu", lastName: "Kumar", age: 35, maritalStatus: "Married", },
      children: [
        { name: "Gurmeet", age: 15, imageSRC: "../../assets/svg/gurmeet.png", },
        { name: "Manmeet", age: 13, imageSRC: "../../assets/svg/manmeet.png", },
        { name: "Parmeet", age: 9, imageSRC: "../../assets/svg/parmeet.png", },
        { name: "Jasmeet", age: 8, imageSRC: "../../assets/svg/jasmeet.png", },
      ],
    },
    {
      son: { firstName: "Rajesh", lastName: "Kumar", age: 33, maritalStatus: "Married", },
      children: [
        { name: "Saumya", age: 9, imageSRC: "../../assets/svg/saumya.png", },
        { name: "Parul", age: 7, imageSRC: "../../assets/svg/parul.png", },
      ],
    },
    {
      son: { firstName: "Rajiv", lastName: "Kumar", age: 28, maritalStatus: "Un-Married", },
      children: [
        { name: "Ranbir", age: 8, imageSRC: "../../assets/svg/ranbir.png", },
        { name: "Sanjay", age: 7, imageSRC: "../../assets/svg/sanjay.png", },
        { name: "Tushar", age: 5, imageSRC: "../../assets/svg/tushar.png", },
      ],
    },
  ];
}
