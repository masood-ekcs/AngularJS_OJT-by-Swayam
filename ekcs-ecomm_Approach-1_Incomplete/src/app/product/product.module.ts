import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { CardHeaderComponent } from './card/card-header/card-header.component';
import { CardMainComponent } from './card/card-main/card-main.component';
import { CardFooterComponent } from './card/card-footer/card-footer.component';



@NgModule({
  declarations: [
    CardComponent,
    ProductsListComponent,
    CardHeaderComponent,
    CardMainComponent,
    CardFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
