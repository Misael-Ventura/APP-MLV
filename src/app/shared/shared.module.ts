import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { DiamanteComponent } from './components/diamante/diamante.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderconComponent } from './components/slidercon/slidercon.component';



@NgModule({
  declarations: [
    SliderComponent,
    DiamanteComponent,
    SliderconComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [SliderComponent,DiamanteComponent,SliderconComponent]
})
export class SharedModule { }
