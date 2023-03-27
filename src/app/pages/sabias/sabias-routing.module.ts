import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SabiasComponent } from './sabias.component';

const routes: Routes = [{
  path: '',
  component: SabiasComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SabiasRoutingModule { }
