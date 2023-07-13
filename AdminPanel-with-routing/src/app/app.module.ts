import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DisplayButtonsComponent } from './components/display-buttons/display-buttons.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';
import { RouterModule } from '@angular/router';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DisplayButtonsComponent,
    AddEmployeeComponent,
    DisplayEmployeeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
