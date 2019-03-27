
import { Injectable } from '@angular/core';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class ServicesProvider {
	public myGlobalVar: Array<Object>=[];
	public VarTarjetas: Array<Object>=[];
  
  constructor() {
  }

}