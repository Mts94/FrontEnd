import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import LoginComponent from './componentes/login/login.component';

import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/NewExperienciaComponent';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'nuevaexp', component: NewExperienciaComponent},
{path: 'editexpe/:id', component: EditExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
