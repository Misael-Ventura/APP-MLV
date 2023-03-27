import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SabiasRoutingModule } from './sabias-routing.module';
import { SabiasComponent } from './sabias.component';


@NgModule({
  declarations: [SabiasComponent],
  imports: [
    CommonModule,
    SabiasRoutingModule
  ]
})
export class SabiasModule { }
