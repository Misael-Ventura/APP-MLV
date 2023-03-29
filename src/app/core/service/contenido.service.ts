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
}
