import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisplayButtonsComponent } from './components/display-buttons/display-buttons.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayButtonsComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
