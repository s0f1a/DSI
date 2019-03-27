import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController, ToastController } from 'ionic-angular';
//import { ServicesProvider } from '../../providers/services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	Origen: string = "";
	Destino: string = "";
	FechaIda: string = "";
	FechaVuelta: string = "";
// public global: ServicesProvider
  constructor(public loadingCtrl: LoadingController, public navCtrl: NavController, private toastCtrl: ToastController) {

  }

  //Carga los vuelos y navega a la pagina de resultados
  irAResultadosPage(){
	if (this.Origen == "" || this.Destino == "" || this.FechaIda == ""|| this.FechaVuelta == "") {
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
	 // this.global.myGlobalVar=[{Origen: this.Origen, Destino: this.Destino}];
	  //console.log(this.global.myGlobalVar);
	  //Si todos los campos estan rellenados
	  console.log(this.Origen);
	  console.log(this.Destino);
	  console.log(this.FechaIda);
	  console.log(this.FechaVuelta);
	  let loading=this.loadingCtrl.create({
		  spinner: 'bubbles',
		  content:'Buscando las mejores ofertas de vuelos...',
		  cssClass: "my-loading"
	  });
	  loading.present();
	  setTimeout(() => {
		loading.dismiss();
	}, 3000);
	
	 setTimeout(() => {
		this.navCtrl.push('ResultadosPage',{param1: this.Origen, param2: this.FechaIda, param3: this.Destino, param4: this.FechaVuelta});
	}, 1000);	
  }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  
}
