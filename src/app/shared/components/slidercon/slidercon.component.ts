import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/core/service/contenido.service';

@Component({
  selector: 'app-slidercon',
  templateUrl: './slidercon.component.html',
  styleUrls: ['./slidercon.component.css']
})
export class SliderconComponent implements OnInit {

  constructor(private contenidoService: ContenidoService) { }


  ngOnInit(): void {
  }
  get data(){
    return this.contenidoService.data;
  }
  getURI(nombre:string){
    return encodeURI(nombre);
  }
}
