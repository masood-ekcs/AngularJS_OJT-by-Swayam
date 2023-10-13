import { Component } from '@angular/core';

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css'],
})
export class DatabaseComponent {
  constructor() {}

  shampooDb = [
    {
      name: 'Head & Shoulder',
      price: 150,
      qty: 8,
      description: [
        'Head & Shoulder Cool Breeze Shampoo',
        'dandruff free',
        'no ammonia',
        'smooth hair',
      ],
    },
    {
      name: 'Vatika',
      price: 135,
      qty: 12,
      description: [
        'Vatika Shampoo with Conditioner',
        'long hair',
        'conditioner added',
        'shiny hair',
      ],
    },
    {
      name: 'Amla',
      price: 250,
      qty: 3,
      description: [
        'Amla Natural Hair Shampoo',
        'lice killer',
        'shiny hair',
        'natural extracts',
      ],
    },
    {
      name: 'Dove',
      price: 190,
      qty: 6,
      description: [
        'Dove Extra Smooth Hair Shampoo',
        'smooth hair',
        'end strands',
        'extra shiny',
      ],
    },
    {
      name: 'Sunsilk',
      price: 120,
      qty: 9,
      description: [
        'Sunsilk Black Shine Shampoo',
        'no gray hair',
        'silky hair',
      ],
    },
    {
      name: 'Himani',
      price: 350,
      qty: 10,
      description: [
        'Himani Aloe-Vera Shampoo',
        'aloe-vera',
        'chemical free',
        'smooth combing',
      ],
    },
    {
      name: 'Shikakaai',
      price: 100,
      qty: 8,
      description: [
        'Shikakaai Extracts Hair Shampoo',
        'long hair',
        'natural shikaai extracts',
        'silky hair',
      ],
    },
  ];
}
