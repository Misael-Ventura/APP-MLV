import { Component, OnInit } from '@angular/core';
import { ContenidoService } from 'src/app/core/service/contenido.service';

@Component({
  selector: 'app-slidercon',
  templateUrl: './slidercon.component.html',
  styleUrls: ['./slidercon.component.css']
})
export class SliderconComponent implements OnInit {

  constructor(private contenidoService: ContenidoService) { }

  contenido =  [{
    image: '../../../../assets/img/Abecedario.jpg',
    title: 'Abecedario',
    descripcion: 'En esta seccion vas a poder comprer y aprender el abecedario en español latinoamericano'
  },
{
  image: '../../../../assets/img/Numeros.jpg',
  title: 'Numeros',
  descripcion: 'En esta seccion se prentende que logres a decir los numeros, para poder decir el dia que naciste'
},
{
  image: '../../../../assets/img/Colores.jpg',
  title: 'Colores',
  descripcion: 'Aprende a decir cuales son tus colores favoritos para poder expresarlo'
},

]
  ngOnInit(): void {
  }
  get data(){
    return this.contenidoService.data;
  }
  getURI(nombre:string){
    return encodeURI(nombre);
  }
}
