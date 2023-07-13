import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ButtonsAllComponent } from './components/buttons-all/buttons-all.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TextareaComponent,
    ButtonsAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
