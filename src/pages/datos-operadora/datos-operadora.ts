import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatosOperadoraMovistarPage } from '../datos-operadora-movistar/datos-operadora-movistar';
import { DatosOperadoraDigitelPage } from '../datos-operadora-digitel/datos-operadora-digitel';
import { DatosOperadoraMovilnetPage } from '../datos-operadora-movilnet/datos-operadora-movilnet';
import { DatosOperadoraCantvPage } from '../datos-operadora-cantv/datos-operadora-cantv';

/**
 * Generated class for the DatosOperadoraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-datos-operadora',
  templateUrl: 'datos-operadora.html',
})
export class DatosOperadoraPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosOperadoraPage');
  }

  click_movistar()
  {
    this.navCtrl.push(DatosOperadoraMovistarPage);
  }

  click_digitel()
  {
    this.navCtrl.push(DatosOperadoraDigitelPage);
  }

  click_movilnet()
  {
    this.navCtrl.push(DatosOperadoraMovilnetPage);
  }

  click_cantv()
  {
    this.navCtrl.push(DatosOperadoraCantvPage);
  }
}
