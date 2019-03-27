import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';

/**
 * Generated class for the MisReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-reservas',
  templateUrl: 'mis-reservas.html',
})
export class MisReservasPage {
parameter1:any;	
parameter2:any;
parameter3:any;
parameter4:any;	
parameter5:any;
parameter6:any;
datas0: Array<Object>;


	
  constructor(public navCtrl: NavController, public navParams: NavParams, 
  private toastCtrl: ToastController, public loadingCtrl: LoadingController,  public global: ServicesProvider) {
	  this.parameter1 = navParams.get('param1');
	  this.parameter2 = navParams.get('param2');
	  this.parameter3 = navParams.get('param3');
	  this.parameter4 = navParams.get('param4');
	  this.parameter5 = navParams.get('paramimgAerolinea');
	  this.parameter6 = navParams.get('paramaerolinea');	
	if(this.parameter1!=null && this.parameter2!=null && this.parameter3!=null && this.parameter4!=null && this.parameter5!=null && this.parameter6!=null){ 
	this.datas0 = [{ origen:  this.parameter1, fechaIda: this.parameter2, destino: this.parameter3, fechaVuelta: this.parameter4, compania: this.parameter6, img: this.parameter5}];
	this.global.myGlobalVar.push(this.datas0);
	console.log(this.global.myGlobalVar);
	}
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad MisReservasPage');
  }
	irALegalidad(){
		this.navCtrl.push('LegalidadPage');
	}
	alertFacturar(fechaIda: any, imagen: any, compania: any, origen:any, destino:any, fechaVuelta: any){
	//Calculo de la diferencia entre la hora actual y la fecha minima de empezar a facturar
	//Modificar fecha para poder facturar
	var time = new Date().getTime() - new Date("2019-03-27T03:00:00.000Z").getTime();

		let loading=this.loadingCtrl.create({
		  spinner: 'bubbles',
		  content:'Se están comprobando los datos...',
		  cssClass: "my-loading"
	  });
	  loading.present();
	  	  setTimeout(() => {
		loading.dismiss();
	}, 5000);
	if (time <=86400){
	//Caso aprobar factura
	//Mostrar pagina de tarjeta de embarque
			let toast = this.toastCtrl.create({
			message: 'Su vuelo va a salir en menos de 24 horas, puede facturar su reserva.',
			duration: 5000,
			position: 'top'
			});
			toast.onDidDismiss(() => {
				console.log('Dismissed toast');
			});
			toast.present();
			this.navCtrl.push('FacturarPage', {paramFechaIda: fechaIda, paramimg: imagen, paramcompania: compania, paramorigen: origen, paramdestino: destino, paramfechaVuelta: fechaVuelta});
        
	}else{
	///Caso ya no se puede facturar, limite de tiempo 24h ha pasado
			let toast = this.toastCtrl.create({
			message: '24 horas antes del vuelo se permitirá realiza la facturación. Es demasiado pronto para facturar.',
			duration: 3000,
			position: 'top'
			});
			toast.onDidDismiss(() => {
				console.log('Dismissed toast');
			});
			toast.present();
        }
	}
}
