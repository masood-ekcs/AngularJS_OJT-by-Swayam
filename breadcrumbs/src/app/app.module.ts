import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources/resources.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ResourcesComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule, // we have to import the 'RouterModule' here.
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
