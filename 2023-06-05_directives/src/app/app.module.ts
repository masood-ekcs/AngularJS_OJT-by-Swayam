import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { GreaterComponent } from './ng-if/greater/greater.component';
import { NgForConditionComponent } from './ng-for-condition/ng-for-condition.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForNormalComponent } from './ng-for-normal/ng-for-normal.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    GreaterComponent,
    NgForConditionComponent,
    NgSwitchComponent,
    NgForNormalComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
