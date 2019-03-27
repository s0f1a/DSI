import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the FacturarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facturar',
  templateUrl: 'facturar.html',
})
export class FacturarPage {
	Nombre: string = "";
	Apellidos: string = "";
	Pasaporte: string = "";
	Emergencias: string = "";
	parameter1:any;
	parameterImagen: any;
	parameterCompania: any;
	parameterOrigen: any;
	parameterDestino: any;
	parameterfechaVuelta: any;
	datas0: Array<Object>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, public loadingCtrl: LoadingController, public global: ServicesProvider) {
	   this.parameter1 = navParams.get('paramFechaIda');
	   this.parameterImagen = navParams.get('paramimg');
	   this.parameterCompania = navParams.get('paramcompania');
	   this.parameterOrigen = navParams.get('paramorigen');
	   this.parameterDestino = navParams.get('paramdestino');
	   this.parameterfechaVuelta = navParams.get('paramfechaVuelta');
	   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturarPage');
  }
guardar(){
		if (this.Nombre == "" || this.Apellidos == "" || this.Pasaporte == ""|| this.Emergencias == "") {
		let toast = this.toastCtrl.create({
			message: 'Rellene todos los campos, por favor.',
			duration: 3000,
			position: 'top'
			});
			toast.onDidDismiss(() => {
				console.log('Dismissed toast');
			});
			toast.present();  
  }else {

		let loading=this.loadingCtrl.create({
		  spinner: 'bubbles',
		  content:'Guardando los datos...',
	  });
	  loading.present();
	  	  setTimeout(() => {
		loading.dismiss();
	}, 3000);
	this.datas0 = [{ origen:  this.parameterOrigen, fechaIda: this.parameter1, destino: this.parameterDestino, fechaVuelta: this.parameterfechaVuelta, compania: this.parameterCompania, img: this.parameterImagen}];
	//Borrado de reserva
	const index: number = this.global.myGlobalVar.indexOf(this.datas0);
    this.global.myGlobalVar.splice(index, 1);
	this.navCtrl.push('MisTarjetasPage',{paramNombre: this.Nombre, paramApellidos: this.Apellidos, paramFecha: this.parameter1});
				let toast = this.toastCtrl.create({
			message: 'TARJETA DE EMBARQUE CREADA CON ÉXITO',
			duration: 5000,
			position: 'top'
			});
			toast.onDidDismiss(() => {
				console.log('Dismissed toast');
			});
			toast.present();
  }
}
}
