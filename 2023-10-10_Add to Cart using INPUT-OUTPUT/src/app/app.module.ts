import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/database/list/list.component';
import { CartComponent } from './components/database/list/details/cart/cart.component';
import { DatabaseComponent } from './components/database/database.component';
import { DetailsComponent } from './components/database/list/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CartComponent,
    DatabaseComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
