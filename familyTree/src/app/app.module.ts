import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstFamilyComponent } from './first-family/first-family.component';
import { ChildrenComponent } from './children/children.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstFamilyComponent,
    ChildrenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
