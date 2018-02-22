import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoServiciosPage } from '../tipo-servicios/tipo-servicios';

/**
 * Generated class for the DatosOperadoraMovilnetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-operadora-movilnet',
  templateUrl: 'datos-operadora-movilnet.html',
})
export class DatosOperadoraMovilnetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosOperadoraMovilnetPage');
  }

  click_tiposervicio()
  {
    this.navCtrl.push(TipoServiciosPage);
  }
}
