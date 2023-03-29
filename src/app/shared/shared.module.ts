import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './components/slider/slider.component';
import { DiamanteComponent } from './components/diamante/diamante.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderconComponent } from './components/slidercon/slidercon.component';
import { CoreModule } from '../core/core.module';
import { ContenidoComponent } from './components/slidercon/contenido/contenido.component';



@NgModule({
  declarations: [
    SliderComponent,
    DiamanteComponent,
    SliderconComponent,
    ContenidoComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    CoreModule
  ],
  exports: [SliderComponent,DiamanteComponent,SliderconComponent]
})
export class SharedModule { }
