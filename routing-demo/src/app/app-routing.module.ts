import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ProductComponent } from './main/home/product/product.component';
import { ContactComponent } from './main/contact/contact.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // url links/routes are defined here, it should be a JSON
  { path: '', component: HomeComponent }, // default route
  // path --> url to the page and the component name to open
  { path: 'myAbout', component: AboutComponent },
  { path: 'mycontact', component: ContactComponent },
  { path: 'myhome/myproduct', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
