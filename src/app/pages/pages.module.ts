import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { SabiasComponent } from './sabias/sabias.component';
import { SharedModule } from '../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    HomeComponent,
    SabiasComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,SharedModule,
    NgbModule,
    LayoutModule
  ]
})
export class PagesModule { }
