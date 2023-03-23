import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {


  slider: any[]=[
    {
      image:'assets/img/slide_01.jpg',
      description:'Hola mundo'
    },
    {
      image:'assets/img/slide_02.jpg',
      description:'Hola mundo'
    },
    {
      image:'assets/img/slide_03.jpg',
      description:'Hola mundo'
    }
  ];

  constructor(private _conf:NgbCarouselConfig) { }


  ngOnInit(): void {
  }

}
