import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

const routes: Routes = [
  {path: '', redirectTo:'/header', pathMatch: 'full' },
  {path: '/header', component: HeaderComponent },
  {path: '/acerca-de', component: AcercaDeComponent },
  {path: '/educacion', component: EducacionComponent },
  {path: '/proyectos', component: ProyectosComponent },
  {path: '/contacto', component: ContactoComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
