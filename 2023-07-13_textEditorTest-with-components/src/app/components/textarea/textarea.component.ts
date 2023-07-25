import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
  @Output() inputUserEmit = new EventEmitter();

  userInputFunction(userText: string): any {
    const inputFromUser = { userText };
    this.inputUserEmit.emit(inputFromUser);
  }

  characterCount: number = 0;
  wordCount: number = 0;

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
