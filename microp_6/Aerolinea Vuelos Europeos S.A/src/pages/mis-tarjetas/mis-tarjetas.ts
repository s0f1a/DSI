import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MisTarjetasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-tarjetas',
  templateUrl: 'mis-tarjetas.html',
})
export class MisTarjetasPage {
	parameter1: any;
	parameter2: any;
	parameter3: any;
	myDate: String=new Date().toISOString();
	datas0: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public global: ServicesProvider) {
	   this.parameter1 = navParams.get('paramNombre');
	   this.parameter2 = navParams.get('paramApellidos');
	   this.parameter3 = navParams.get('paramFecha');
	if(this.parameter1!=null && this.parameter2!=null && this.parameter3!=null){ 
	this.datas0 = [{ nombre: this.parameter1, apellidos: this.parameter2, fecha: this.parameter3}];
	this.global.VarTarjetas.push(this.datas0);
	console.log(this.global.VarTarjetas);
	}
	   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisTarjetasPage');
  }

}
