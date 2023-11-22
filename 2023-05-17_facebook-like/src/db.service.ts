import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  totalCardCount: number = 0;

  constructor() {}

  countCard() {
    this.totalCardCount += 1;
  }
}
