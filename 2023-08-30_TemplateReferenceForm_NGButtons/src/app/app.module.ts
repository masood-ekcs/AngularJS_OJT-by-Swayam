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
import { ButtonsComponent } from './shared/buttons/buttons.component';
import { WrapperComponent } from './shared/wrapper/wrapper.component';
import { ButtonsNGComponent } from './shared/buttons-ng/buttons-ng.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplitButtonModule } from 'primeng/splitbutton';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    AppComponent,
    TemplateReferenceFormComponent,
    UserDetailsComponent,
    RegisterNewUserComponent,
    Page404Component,
    TableComponent,
    ButtonsComponent,
    WrapperComponent,
    ButtonsNGComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ButtonModule,
    BrowserAnimationsModule,
    SplitButtonModule,
    ToastModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
