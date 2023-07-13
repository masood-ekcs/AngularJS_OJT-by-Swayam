import { Component } from '@angular/core';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
NavBarComponent;
TextAreaComponent;
ButtonsComponent;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userText: string = '';
}
