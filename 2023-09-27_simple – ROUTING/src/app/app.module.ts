import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserInputFormComponent } from './main/todo/user-input-form/user-input-form.component';
import { DisplayFormComponent } from './main/todo/display-form/display-form.component';
import { AlertComponent } from './main/todo/alert/alert.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './main/todo/todo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInputFormComponent,
    DisplayFormComponent,
    AlertComponent,
    HomeComponent,
    TodoComponent,
    NavbarComponent,
    MainComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
