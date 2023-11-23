import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { DbService } from '../db.service';

@Component({
  selector: 'app-form',
  styleUrls: ['./form.component.css'],
  template: `
    <div>
      <input type="text" name="titleMain" #title /><br />
      <input type="text" name="imageMain" #image />
      <button (click)="submit(title, image)">Submit</button>
    </div>
    {{ changeD() }}
  `,
})
export class FormComponent {
  constructor(private dbService: DbService) {}

  // clearFields() : void{

  // }

  checkEmptyInp(title: string, image: string): boolean {
    if (title == '' || image == '') {
      return true;
    }
    return false;
  }

  submit(title: HTMLInputElement, image: HTMLInputElement): boolean {
    if (this.checkEmptyInp(title.value, image.value)) {
      alert('Inputs cannot be empty');
    } else {
      console.log({ title: title, image: image, like: 0, dislike: 0 });
      this.dbService.addPost({
        title: title.value,
        image: image.value,
        like: 0,
        dislike: 0,
      });
      title.value = '';
      image.value = '';
    }
    return false;
  }

  changeD() {
    console.log('Form was refreshed / rerendered');
  }
}
