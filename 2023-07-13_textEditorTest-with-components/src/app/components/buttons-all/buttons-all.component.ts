import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons-all',
  templateUrl: './buttons-all.component.html',
  styleUrls: ['./buttons-all.component.css'],
})
export class ButtonsAllComponent {
  @Input() buttonsList: any;
  @Input() buttonsLabel: any;
  @Input() bClick: any;

  characterCount: number = 0;
  wordCount: number = 0;

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
    console.log(finalValue);
    userTextInput.value = finalValue;
  }

  copyText(userTextInput: HTMLTextAreaElement) {
    navigator.clipboard.writeText(userTextInput.value);
    console.log('Text Copied to Clipboard...');
    // alert('text Copied');
  }

  countCharLength(userTextInput: HTMLTextAreaElement) {
    const charLength = userTextInput.value.length;
    this.characterCount = charLength;
    // console.log(charLength);
  }

  countWordLength(userTextInput: HTMLTextAreaElement) {
    const words = userTextInput.value.split(' ').length;
    this.wordCount = words;
    // console.log(this.wordCount);
  }
}
