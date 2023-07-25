import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonsAllComponent } from './components/buttons-all/buttons-all.component';
import { TextareaComponent } from './components/textarea/textarea.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, ButtonsAllComponent, TextareaComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
