import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoServiciosPage } from './tipo-servicios';

@NgModule({
  declarations: [
    TipoServiciosPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoServiciosPage),
  ],
})
export class TipoServiciosPageModule {}
