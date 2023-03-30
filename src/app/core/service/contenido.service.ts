import { Injectable } from '@angular/core';
import { contenido } from 'src/app/shared/data/contenido.data';

@Injectable({
  providedIn: 'root'
})
export class ContenidoService {

  private _data = contenido

  constructor() { }

  get data(){
    return this._data
  }
  getcontenidos(nombre:string){

    let contenidos = this._data.slider_uno.filter((contenidos)=> contenidos.title === nombre)
    console.log(contenidos[0]);

  return contenidos[0] ;
  }
}
