import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { QuantityComponent } from '../Shared/quantity/quantity.component';
import { ButtonComponent } from '../Shared/button/button.component';
import { CartMainComponent } from './cart-item/cart-main/cart-main.component';
import { CartHeaderComponent } from './cart-item/cart-header/cart-header.component';
import { CartTotalComponent } from './cart-total/cart-total.component';
import { CartFooterComponent } from './cart-item/cart-footer/cart-footer.component';

@NgModule({
  declarations: [
    CartListComponent,
    CartItemComponent,
    CartTotalComponent,
    CartFooterComponent,
    CartMainComponent,
    CartHeaderComponent,
  ],
  imports: [CommonModule, QuantityComponent, ButtonComponent],
  exports: [CartListComponent],
})
export class CartModule {}
