import { BrowserModule } from '@angular/platform-browser' ;
import { ErrorHandler , NgModule } from '@angular/core' ;
import { IonicApp , IonicErrorHandler , IonicModule } from 'ionic-angular' ;
import { MyApp } from './app.component' ;
import { HomePage } from '../pages/home/home' ;
import { AcercaDePage } from '../pages/acerca-de/acerca-de' ;
import { StatusBar } from '@ionic-native/status-bar' ;
import { SplashScreen } from '@ionic-native/splash-screen' ;
import { ServicesProvider } from '../providers/services/services';

@ NgModule ({
declarations: [
MyApp ,
HomePage ,
AcercaDePage
],
imports: [
BrowserModule ,
IonicModule . forRoot ( MyApp ),
],
bootstrap: [ IonicApp ],
entryComponents: [
MyApp ,
HomePage ,
AcercaDePage
],
providers: [
StatusBar ,
SplashScreen ,
{ provide: ErrorHandler , useClass: IonicErrorHandler },
ServicesProvider
]
})
export class AppModule {}