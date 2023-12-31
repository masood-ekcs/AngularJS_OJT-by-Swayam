import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { ProductsComponent } from './products/products.component';
import { ImportedComponent } from './imported/imported.component';
import { AntiquesComponent } from './antiques/antiques.component';
import { ItalianComponent } from './italian/italian.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // default route like # in HTML
  { path: 'about', component: AboutComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/imported', component: ImportedComponent },
  { path: 'antiques', component: AntiquesComponent },
  { path: 'products/italian', component: ItalianComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
