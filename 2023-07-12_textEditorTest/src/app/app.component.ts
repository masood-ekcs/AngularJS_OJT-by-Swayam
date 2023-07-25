import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'textEditorTest';
  characterCount: number = 0;
  spaceCount: number = 0;
  characterCountWithoutSpaces: number = 0;
  wordCount: number = 0;

  // capText2(userTextInput2: HTMLInputElement) { // for the Input fields
  //   const textUpper = userTextInput2.value.toUpperCase();
  //   userTextInput2.value = textUpper;
  // }

  capText(userTextInput: HTMLTextAreaElement) {
    const textUpper = userTextInput.value.toUpperCase();
    userTextInput.value = textUpper;
  }

  lowerText(userTextInput: HTMLTextAreaElement) {
    const textLower = userTextInput.value.toLowerCase();
    userTextInput.value = textLower;
  }

  firstCharCap(userTextInput: HTMLTextAreaElement) {
    var space = userTextInput.value.split(' '); // ["abc", "bc3"]
    var newArr = [];

    for (var i = 0; i < space.length; i++) {
      var value = space[i];
      var sum = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      newArr.push(sum);
    }
    var finalValue = newArr.join(' ');
    userTextInput.value = finalValue;
    // console.log(finalValue);
  }

  copyText(userTextInput: HTMLTextAreaElement) {
    navigator.clipboard.writeText(userTextInput.value);
    // console.log('Text Copied to Clipboard...');
    setTimeout(() => {
      // setting timeout to delay the alert execution
      alert('text Copied');
    }, 50); // this is mili-seconds
  }

  countCharLength(userTextInput: HTMLTextAreaElement) {
    const charLength = userTextInput.value.length;
    this.characterCount = charLength;
    // console.log(charLength);
  }

  countCharWithoutSpacesLength(userTextInput: HTMLTextAreaElement) {
    const spaceCount = userTextInput.value.split(' ').length - 1;
    const charLength = userTextInput.value.length;
    this.characterCountWithoutSpaces = charLength - spaceCount;
  }

  countWordLength(userTextInput: HTMLTextAreaElement) {
    const words = userTextInput.value.split(' ').length;
    this.wordCount = words;
    // console.log(this.wordCount);
  }
}
