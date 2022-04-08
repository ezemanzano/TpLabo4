import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TatetiComponent } from './juegos/tateti/tateti.component';
import { JuegosComponent } from './juegos/juegos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MayoromenorComponent } from './juegos/mayoromenor/mayoromenor.component';
import { PreguntadosComponent } from './juegos/preguntados/preguntados.component';
import { MinesComponent } from './juegos/mines/mines.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    NavbarComponent,
    TatetiComponent,
    JuegosComponent,
    NotFoundComponent,
    MayoromenorComponent,
    PreguntadosComponent,
    MinesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
