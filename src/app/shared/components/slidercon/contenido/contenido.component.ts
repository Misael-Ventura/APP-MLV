import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent implements OnInit {
  parametro: string = '';

  constructor(private activaRoute: ActivatedRoute,
    private router: Router) {
    let id = '';
    activaRoute.params.subscribe(({id: nombreContenido})=>{
      id = nombreContenido;
    });
     this.parametro = decodeURI(id);
  }

  ngOnInit(): void {
  }
  goContenido(){
    this.router.navigate(['home.html#nosotros'])

  }
}
