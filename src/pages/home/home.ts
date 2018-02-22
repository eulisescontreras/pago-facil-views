import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatosOperadoraPage } from '../datos-operadora/datos-operadora';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public siguiente():void{
    this.navCtrl.push(DatosOperadoraPage);
  }

}
