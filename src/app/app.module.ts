import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatosOperadoraPage } from '../pages/datos-operadora/datos-operadora';
import { DatosOperadoraMovistarPage } from '../pages/datos-operadora-movistar/datos-operadora-movistar';
import { DatosOperadoraDigitelPage } from '../pages/datos-operadora-digitel/datos-operadora-digitel';
import { DatosOperadoraMovilnetPage } from '../pages/datos-operadora-movilnet/datos-operadora-movilnet';
import { DatosOperadoraCantvPage } from '../pages/datos-operadora-cantv/datos-operadora-cantv';
import { TipoServiciosPage } from '../pages/tipo-servicios/tipo-servicios';
import { MontoRecargarPage } from '../pages/monto-recargar/monto-recargar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DatosOperadoraPage,
    DatosOperadoraMovistarPage,
    DatosOperadoraDigitelPage,
    DatosOperadoraMovilnetPage,
    DatosOperadoraCantvPage,
    TipoServiciosPage,
    MontoRecargarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DatosOperadoraPage,
    DatosOperadoraMovistarPage,
    DatosOperadoraDigitelPage,
    DatosOperadoraMovilnetPage,
    DatosOperadoraCantvPage,
    TipoServiciosPage,
    MontoRecargarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
