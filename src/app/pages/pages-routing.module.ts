import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SabiasComponent } from './sabias/sabias.component';

const routes: Routes = [{
  path: 'home',
  component:HomeComponent
},
{
  path:'sabias',
  component:SabiasComponent
},
{
  path:'**',
  redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
