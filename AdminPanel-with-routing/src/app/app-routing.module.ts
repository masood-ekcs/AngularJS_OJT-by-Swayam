import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayButtonsComponent } from './components/display-buttons/display-buttons.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DisplayEmployeeComponent } from './components/display-employee/display-employee.component';

const routes: Routes = [
  { path: '', component: DisplayButtonsComponent },
  { path: 'addnew', component: AddEmployeeComponent },
  { path: 'display', component: DisplayEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
