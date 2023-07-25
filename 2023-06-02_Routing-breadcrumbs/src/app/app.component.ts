import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing';

  BreadCrumbs: any = [
    { label: "Home Page", link: "/" },
    { label: "Brand Page", link: "/brand" },
    { label: "Text Page", link: "/text" },

  ]

}
