import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    HomeComponent,
    BrandComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
