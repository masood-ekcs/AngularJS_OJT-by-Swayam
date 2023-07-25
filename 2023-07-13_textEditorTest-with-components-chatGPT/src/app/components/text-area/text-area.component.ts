import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.css'],
})
export class TextAreaComponent {
  @Output() userTextChanged = new EventEmitter<string>();

  onUserTextChanged(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const userText = target.value;
    this.userTextChanged.emit(userText);
  }

  // onUserTextChanged(userText: string) {
  //   this.userTextChanged.emit(userText);
  // }
}
