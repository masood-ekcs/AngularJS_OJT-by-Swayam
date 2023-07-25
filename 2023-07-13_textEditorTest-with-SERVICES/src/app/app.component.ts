import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'textEditorTest';
  characterCount: number = 0;
  wordCount: number = 0;
  eValue: string = '';
  outputValue: string = '';

  constructor(public serviceData: DataService) {}

  inputEvalue(userText: HTMLTextAreaElement) {
    this.serviceData.addToDatabase(userText.value); // this value will go to dataService

    // this.serviceData.userInputVariable = userText.value;
    // console.log(this.serviceData.userInputVariable);
  }

  outputEvalue() {
    this.eValue = this.serviceData.changedValue();
  }

  capText() {
    this.serviceData.makeCaps();
    this.outputEvalue();
  }

  lowerText() {
    this.serviceData.makeLower();
    this.outputEvalue();
  }

  firstCharCap() {
    this.serviceData.makeFirstcap();
    this.outputEvalue();
  }

  copyText() {
    this.serviceData.makeCopy();
  }

  pasteText() {
    this.serviceData.makePaste();
    setTimeout(() => {
      this.outputEvalue();
    }, 150);
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
