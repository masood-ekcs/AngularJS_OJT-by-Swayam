import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userInputVariable: string = ''; // empty database to store user input values from the text-area
  eValue: string = '';
  characterCount: number = 0;
  characterCountWithoutSpaces: number = 0;
  wordCount: number = 0;
  nameGroup: any[] = [];

  constructor() {}

  addToDatabase(textFromUser: string): any {
    this.userInputVariable = textFromUser;
    console.log('addToDatabase ' + this.userInputVariable);
  }

  changedValue() {
    console.log('changedValue ' + this.userInputVariable);
    return this.userInputVariable; // this will udpate the  database with the new value once the function is executed
  }

  outputEvalue() {
    this.eValue = this.changedValue();
    console.log('outputEvalue ' + this.eValue);
  }

  makeCaps() {
    this.userInputVariable = this.userInputVariable.toUpperCase();
    console.log('makeCaps ' + this.userInputVariable);
  }

  makeLower() {
    this.userInputVariable = this.userInputVariable.toLowerCase();
    console.log('makeLower ' + this.userInputVariable);
  }

  makeFirstcap() {
    var space = this.userInputVariable.split(' '); // ["abc", "bc3"]
    var newArr = [];

    for (var i = 0; i < space.length; i++) {
      var value = space[i];
      var sum = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      newArr.push(sum);
    }
    var finalValue = newArr.join(' ');
    // console.log(finalValue);
    this.userInputVariable = finalValue;
    console.log('makeFirstcap ' + this.userInputVariable);
  }

  makeCopy() {
    navigator.clipboard.writeText(this.userInputVariable);
    console.log('Text Copied to Clipboard...');
    setTimeout(() => {
      // setting timeout to delay the alert execution
      // alert('text Copied');
    }, 100); // this is mili-seconds
  }

  makePaste() {
    navigator.clipboard
      .readText()
      .then((pValue) => {
        setTimeout(() => {
          this.userInputVariable = this.userInputVariable + pValue;
          console.log('pValue ' + pValue);
        }, 100);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  makeCharCount() {
    const charLength = this.userInputVariable.length;
    this.characterCount = charLength;
    console.log('makeCharCount ' + this.characterCount);
  }

  makeCharCountWithoutSpaces() {
    const spaceCount = this.userInputVariable.split(' ').length - 1; // [hello, my name is masood]
    const charLength = this.userInputVariable.length;
    this.characterCountWithoutSpaces = charLength - spaceCount;
    console.log(
      'makeCharCountWithoutSpaces ' + this.characterCountWithoutSpaces
    );
  }

  makeWordCount() {
    const wordsLength = this.userInputVariable.split(' ').length;
    this.wordCount = wordsLength;
    console.log('makeWordCount ' + this.wordCount);
  }
}
