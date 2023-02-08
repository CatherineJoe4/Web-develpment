import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { FormsModule } from '@angular/forms';
import {provideStorage, getStorage} from '@angular/fire/storage';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {provideFirestore,getFirestore} from '@angular/fire/firestore'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WorksComponent } from './works/works.component';
import { MagazineComponent } from './magazine/magazine.component';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { WedComponent } from './works/wed/wed.component';
import { FrocksComponent } from './works/frocks/frocks.component';
import { SareesComponent } from './works/sarees/sarees.component';
import { SalwarComponent } from './works/salwar/salwar.component';
import { BlousesComponent } from './works/blouses/blouses.component';
import { LehengasComponent } from './works/lehengas/lehengas.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    GalleryComponent,
    WorksComponent,
    MagazineComponent,
    RegisterComponent,
    OrdersComponent,
    WedComponent,
    FrocksComponent,
    SareesComponent,
    SalwarComponent,
    BlousesComponent,
    LehengasComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(()=>getStorage()),
    provideFirestore(() => getFirestore()),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
