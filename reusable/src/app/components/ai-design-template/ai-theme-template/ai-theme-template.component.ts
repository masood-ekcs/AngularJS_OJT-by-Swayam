import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-theme-template',
  templateUrl: './ai-theme-template.component.html',
  styleUrls: ['./ai-theme-template.component.scss']
})
export class AiThemeTemplateComponent {
  aiTemplateLabel: String = 'Theme';
  aiThemeOptionDefault: String = 'Picture Led';
  aiThemeOption1: String = 'Offer Led';
  aiThemeOption3: String = 'Picture/Offer';
  aiThemeOption5: String = 'Text only';
  selectTheme() {
    console.log('Select Theme')
  }
}