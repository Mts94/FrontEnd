import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import LoginComponent from './componentes/login/login.component';

import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/NewExperienciaComponent';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewSkillComponent } from './componentes/skills/new-skill.component';
import { EditSkillComponent } from './componentes/skills/edit-skill.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EditAcerdeComponent } from './componentes/acerca-de/edit-acerde.component';



const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'login', component: LoginComponent},
{path: 'nuevaexp', component: NewExperienciaComponent},
{path: 'editexpe/:id', component: EditExperienciaComponent},
{path: 'nuevaedu', component: NewEducacionComponent},
{path: 'editedu/:id', component: EditEducacionComponent},
{path: 'newskill', component:NewSkillComponent},
{path: 'editskill/:id', component: EditSkillComponent},
{path: 'editacercade/:id', component: EditAcerdeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
