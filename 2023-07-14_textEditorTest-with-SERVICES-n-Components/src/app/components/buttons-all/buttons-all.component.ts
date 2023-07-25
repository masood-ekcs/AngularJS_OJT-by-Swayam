import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-buttons-all',
  templateUrl: './buttons-all.component.html',
  styleUrls: ['./buttons-all.component.css'],
})
export class ButtonsAllComponent {
  constructor(public serviceData: DataService) {}

  outputValue: string = '';
  eValue: string = '';
  characterCount = this.serviceData.characterCount;
  characterCountWithoutSpaces = this.serviceData.characterCountWithoutSpaces;
  wordCount = this.serviceData.wordCount;

  capText() {
    this.serviceData.makeCaps();
    this.serviceData.outputEvalue();
  }

  lowerText() {
    this.serviceData.makeLower();
    this.serviceData.outputEvalue();
  }

  firstCharCap() {
    this.serviceData.makeFirstcap();
    this.serviceData.outputEvalue();
  }

  copyText() {
    this.serviceData.makeCopy();
  }

  pasteText() {
    this.serviceData.makePaste();
    setTimeout(() => {
      this.serviceData.outputEvalue();
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
