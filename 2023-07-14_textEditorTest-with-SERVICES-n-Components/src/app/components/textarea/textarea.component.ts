import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  constructor(public serviceData: DataService) {}

  valueDB = this.serviceData.eValue;

  inputEvalue(userText: HTMLTextAreaElement) {
    this.serviceData.addToDatabase(userText.value); // this value will go to dataService
  }

  countCharLength() {
    this.serviceData.makeCharCount();
  }

  countCharWithoutSpacesLength() {
    this.serviceData.makeCharCountWithoutSpaces();
  }

  countWordLength() {
    this.serviceData.makeWordCount();
  }
}
