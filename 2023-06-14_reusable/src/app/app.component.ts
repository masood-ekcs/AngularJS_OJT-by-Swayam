import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  info = {
    cta: {
      name: 'CTA Text',
      isInput: true,
      id: '1',
      btn: 'CTA Submit Button',
    },
    headline: {
      name: 'HEADLINE Text',
      isInput: false,
      id: '2',
      btn: 'Headline Submit Button',
    },
    banner: {
      name: 'BANNER Text',
      isInput: false,
      id: '3',
      btn: 'Banner Submit Button',
    },
    ads: {
      name: 'Ads Text',
      isInput: true,
      id: '4',
      btn: 'Ads Text Submit Button',
    },
  };

  drop = {
    theme: {
      title: 'Theme',
      default: 'd2',
      options: ['d1', 'd2', 'd3', 'd4'],
    },
    style: {
      title: 'Style',
      default: 'd22',
      options: ['d11', 'd22', 'd33', 'd44'],
    },
  };
}
