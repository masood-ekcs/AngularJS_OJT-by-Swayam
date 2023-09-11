import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateReferenceFormComponent } from './components/template-reference-form/template-reference-form.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { RegisterNewUserComponent } from './components/register-new-user/register-new-user.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  { path: '', component: RegisterNewUserComponent },
  { path: 'login', component: TemplateReferenceFormComponent },
  { path: 'userdetails', component: UserDetailsComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
