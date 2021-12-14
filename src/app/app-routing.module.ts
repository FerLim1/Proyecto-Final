import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './components/routes/contactos/contactos.component';
import { GaleriaComponent } from './components/routes/galeria/galeria.component';
import { InicioComponent } from './components/routes/inicio/inicio.component';
import { ServiciosComponent } from './components/routes/servicios/servicios.component';

const routes: Routes = [
  {
   path: 'inicio', 
   component: InicioComponent 
  },
  {
    path: 'contactos', 
   component: ContactosComponent 
  },
  {
    path: 'galeria', 
   component: GaleriaComponent 
  },
  {
    path: 'servicios', 
   component: ServiciosComponent 
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
