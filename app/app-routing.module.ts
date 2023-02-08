import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { MagazineComponent } from './magazine/magazine.component';

import { NavComponent } from './nav/nav.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { BlousesComponent } from './works/blouses/blouses.component';
import { FrocksComponent } from './works/frocks/frocks.component';
import { LehengasComponent } from './works/lehengas/lehengas.component';
import { SalwarComponent } from './works/salwar/salwar.component';
import { SareesComponent } from './works/sarees/sarees.component';
import { WedComponent } from './works/wed/wed.component';
import { WorksComponent } from './works/works.component';


const routes: Routes = [
  {path:"nav",component:NavComponent},
  {path:"home",component:HomeComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"works",component:WorksComponent,children:[{path:"wed",component:WedComponent},{path:"sarees",component:SareesComponent},{path:"frocks",component:FrocksComponent},{path:"salwar",component:SalwarComponent},{path:"blouses",component:BlousesComponent},{path:"lehengas",component:LehengasComponent}]},
  {path:"magazine",component:MagazineComponent},
  {path:"register",component:RegisterComponent},
  {path:"orders",component:OrdersComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
