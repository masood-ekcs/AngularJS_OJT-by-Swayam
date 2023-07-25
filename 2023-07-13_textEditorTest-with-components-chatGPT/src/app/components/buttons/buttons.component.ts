import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent {
  @Input() userText!: string;

  title = 'textEditorTest';
  characterCount: number = 0;
  wordCount: number = 0;

  countCharLength(userTextInput: string) {
    const charLength = userTextInput.length;
    this.characterCount = charLength;
    // console.log(charLength);
  }

  countWordLength(userTextInput: string) {
    const words = userTextInput.split(' ').length;
    this.wordCount = words;
    // console.log(this.wordCount);
  }

  capText(userTextInput: string) {
    const textUpper = userTextInput.toUpperCase();
    userTextInput = textUpper;
    console.log(userTextInput);
  }

  lowerText(userTextInput: string) {
    const textLower = userTextInput.toLowerCase();
    userTextInput = textLower;
    console.log(userTextInput);
  }

  firstCharCap(userTextInput: string) {
    var space = userTextInput.split(' '); // ["abc", "bc3"]
    var newArr = [];

    for (var i = 0; i < space.length; i++) {
      var value = space[i];
      var sum = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      newArr.push(sum);
    }
    var finalValue = newArr.join(' ');
    console.log(finalValue);
    userTextInput = finalValue;
  }

  copyText(userTextInput: string) {
    navigator.clipboard.writeText(userTextInput);
    console.log('Text Copied to Clipboard...');
    // alert('text Copied');
  }
}
