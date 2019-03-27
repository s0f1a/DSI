import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController} from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the ResultadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {
parameter1:any;
parameter2:any;
parameter3:any;
parameter4:any;


  constructor(public alertController: AlertController,
  public navCtrl: NavController, public navParams: NavParams, 
  private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
	  this.parameter1 = navParams.get('param1');
	  this.parameter2 = navParams.get('param2');
	  this.parameter3 = navParams.get('param3');
	  this.parameter4 = navParams.get('param4');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadosPage');
  }
  alertConfirm(opcion: number){
  let alert = this.alertController.create({
    title: 'Confirmar reserva',
    message: 'Ya has planificado tu vuelo, ¿estás seguro de la reserva?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancelar',
        handler: (data) => {
          console.log('Cancelar clicked');
        }
      },
      {
        text: 'Reservar',
        handler: () => {
			console.log('Reservar clicked');
			let toast = this.toastCtrl.create({
			message: 'OPERACIÓN REALIZADA CON ÉXITO',
			duration: 3000,
			position: 'top'
			});
			toast.onDidDismiss(() => {
				console.log('Dismissed toast');
			});
			toast.present();
			 if(opcion==1){
				let imgAerolinea: string = "/assets/imgs/logoRyanair.png";
				let aerolinea: string = "Aerolínea Ryanair";
				this.navCtrl.push('MisReservasPage', {param1: this.parameter1, param2: this.parameter2, param3: this.parameter3, param4: this.parameter4, paramimgAerolinea: imgAerolinea, paramaerolinea: aerolinea});
			  }else if(opcion==2){
				let imgAerolinea: string = "/assets/imgs/logoeasyJet.png";
				let aerolinea: string = "Aerolínea easyJet";
				this.navCtrl.push('MisReservasPage', {param1: this.parameter1, param2: this.parameter2, param3: this.parameter3, param4: this.parameter4, paramimgAerolinea: imgAerolinea, paramaerolinea: aerolinea});
			  }else if(opcion==3){
				let imgAerolinea: string = "/assets/imgs/logoVueling.png";
				let aerolinea: string = "Aerolínea Vueling";
				this.navCtrl.push('MisReservasPage', {param1: this.parameter1, param2: this.parameter2, param3: this.parameter3, param4: this.parameter4, paramimgAerolinea: imgAerolinea, paramaerolinea: aerolinea});
			  }else if(opcion==4){
				let imgAerolinea: string = "/assets/imgs/logoIberia.png";
				let aerolinea: string = "Aerolínea Iberia";
				this.navCtrl.push('MisReservasPage', {param1: this.parameter1, param2: this.parameter2, param3: this.parameter3, param4: this.parameter4, paramimgAerolinea: imgAerolinea, paramaerolinea: aerolinea});
			  }else{
				let imgAerolinea: string = "/assets/imgs/logoBA.png";
				let aerolinea: string = "Aerolínea British Airways";
				this.navCtrl.push('MisReservasPage', {param1: this.parameter1, param2: this.parameter2, param3: this.parameter3, param4: this.parameter4, paramimgAerolinea: imgAerolinea, paramaerolinea: aerolinea});
			  }
        }}
    ]
  });
  alert.present(alert);
	}
}
