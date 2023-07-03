import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandComponent } from './brand/brand.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brand', component: BrandComponent },
  { path: 'text', component: TextComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
