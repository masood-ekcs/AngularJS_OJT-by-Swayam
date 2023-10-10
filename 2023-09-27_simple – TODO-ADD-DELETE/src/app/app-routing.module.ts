import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserInputFormComponent } from './todo/user-input-form/user-input-form.component';
import { AlertComponent } from './todo/alert/alert.component';
import { DisplayFormComponent } from './todo/display-form/display-form.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
    // children: [{ path: '', component: UserInputFormComponent }],
  },
  { path: 'display', component: DisplayFormComponent },
  { path: 'alert', component: AlertComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
