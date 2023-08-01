import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { ImageAreaComponent } from './components/main/image-area/image-area.component';
import { ButtonsAreaComponent } from './components/main/buttons-area/buttons-area.component';
import { DisplayAreaComponent } from './components/main/display-area/display-area.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    ImageAreaComponent,
    ButtonsAreaComponent,
    DisplayAreaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
