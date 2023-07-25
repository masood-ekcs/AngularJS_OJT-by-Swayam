import { Component } from '@angular/core';

@Component({
  selector: 'app-ai-style-template',
  templateUrl: './ai-style-template.component.html',
  styleUrls: ['./ai-style-template.component.scss'],
})
export class AiStyleTemplateComponent {
  aiTemplateLabel: String = 'Style';
  aiStyleOptionDefault: String = 'Modern';
  aiStyleOption1: String = 'Business';
  aiStyleOption3: String = 'Healthy';
  aiStyleOption5: String = 'Classic';
  selectStyle() {
    console.log('Select Style')
  }
}

//   aiDesignTemplate = {
//     aiStyleTemplate: [
//       {
//         aiTemplateLabel: 'Style',
//         aiStyleOptionDefault: 'Modern',
//         aiStyleOption1: 'Business',
//         aiStyleOption3: 'Healthy',
//         aiStyleOption5: 'Classic',
//       },
//     ],

//     aiThemeTemplate: [
//       {
//         aiTemplateLabel: 'Theme',
//         aiThemeOptionDefault: 'Picture Led',
//         aiThemeOption1: 'Offer Led',
//         aiThemeOption3: 'Picture/Offer',
//         aiThemeOption5: 'Text only',
//       },
//     ],
//   };

//   selectStyle() {
//     console.log('Select Style');
//   }
// }
