import { Injectable } from '@angular/core';
import { ProductInterface } from '../productInterface';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor() {}

  cartCount!: number;

  shampoo: ProductInterface[] = [
    {
      id: 111,
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
      id: 222,
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
      id: 333,
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
      id: 444,
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
      id: 555,
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
      id: 666,
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
      id: 777,
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

  getProduct(): ProductInterface[] {
    return this.shampoo;
  }
}
