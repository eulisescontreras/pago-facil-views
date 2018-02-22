import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TipoServiciosPage } from '../tipo-servicios/tipo-servicios';

/**
 * Generated class for the DatosOperadoraDigitelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-operadora-digitel',
  templateUrl: 'datos-operadora-digitel.html',
})
export class DatosOperadoraDigitelPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosOperadoraDigitelPage');
  }

  click_tiposervicio()
  {
    this.navCtrl.push(TipoServiciosPage);
  }
}
