import { Routes } from '@angular/router';
import { InicioComponent } from "./components/inicio/inicio.component";
import { QuienesSomosComponent } from "./components/quienes-somos/quienes-somos.component";
import { ContactenosComponent } from "./components/contactenos/contactenos.component";



export const ROUTES: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent },
  { path: 'contactenos', component: ContactenosComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];
