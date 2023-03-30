import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContenidoService } from 'src/app/core/service/contenido.service';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  parametro: string = '';
  contenidosVideo: any = {};

  constructor(private activaRoute: ActivatedRoute,
    private contenidodataservice: ContenidoService,
    private router: Router) {
    let id = '';
    activaRoute.params.subscribe(({id: nombreContenido})=>{
      id = nombreContenido;
    });
     this.parametro = decodeURI(id);
  }

  ngOnInit(): void {
  this.contenidosVideo =  this.contenidodataservice.getcontenidos(this.parametro);
  }
  goContenido(){
    this.router.navigate(['home.html#nosotros'])

  }
}
