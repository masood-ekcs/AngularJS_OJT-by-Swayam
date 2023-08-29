import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { FormsModule } from '@angular/forms'; // used when we used ngModel
import { DisplayLogComponent } from './components/display-log/display-log.component';
import { DataService } from './service/data.service';
import { TempComponent } from './components/temp/temp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InputFormComponent,
    DisplayLogComponent,
    TempComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
