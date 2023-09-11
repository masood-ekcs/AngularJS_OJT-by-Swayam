import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateReferenceFormComponent } from './components/template-reference-form/template-reference-form.component';
import { FormsModule } from '@angular/forms';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RegisterNewUserComponent } from './components/register-new-user/register-new-user.component';
import { Page404Component } from './components/page404/page404.component';
import { TableComponent } from './shared/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateReferenceFormComponent,
    UserDetailsComponent,
    RegisterNewUserComponent,
    Page404Component,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
