import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacturarPage } from './facturar';

@NgModule({
  declarations: [
    FacturarPage,
  ],
  imports: [
    IonicPageModule.forChild(FacturarPage),
  ],
})
export class FacturarPageModule {}
