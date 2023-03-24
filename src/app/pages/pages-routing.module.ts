import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SabiasComponent } from './sabias/sabias.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [{
  path: 'home',
  component:HomeComponent
},
{
  path:'sabias',
  component:SabiasComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'registar',
  component:RegisterComponent
},
{
  path: '**',
  redirectTo:'home'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
