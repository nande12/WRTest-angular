import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { NavComponent } from './components/shared/nav/nav.component';

// Import Routes
import { ROUTES } from './app-routing.module';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SliderComponent } from './components/shared/slider/slider.component';
import { AccordionComponent } from './components/shared/accordion/accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    QuienesSomosComponent,
    ContactenosComponent,
    NavComponent,
    FooterComponent,
    SliderComponent,
    AccordionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
