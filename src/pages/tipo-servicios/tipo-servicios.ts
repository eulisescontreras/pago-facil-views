import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MontoRecargarPage } from '../monto-recargar/monto-recargar';

/**
 * Generated class for the TipoServiciosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipo-servicios',
  templateUrl: 'tipo-servicios.html',
})
export class TipoServiciosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoServiciosPage');
  }

  public siguiente():void{
    this.navCtrl.push(MontoRecargarPage);
  }

}
