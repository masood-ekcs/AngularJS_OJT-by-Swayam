import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserInputFormComponent } from './main/todo/user-input-form/user-input-form.component';
import { AlertComponent } from './main/todo/alert/alert.component';
import { DisplayFormComponent } from './main/todo/display-form/display-form.component';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './main/todo/todo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'todo',
    component: TodoComponent,
    // children: [
    //   // { path: '', component: UserInputFormComponent },
    //   { path: 'alert', component: AlertComponent },
    //   { path: 'display', component: DisplayFormComponent },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
