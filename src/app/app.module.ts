import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './componentes/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './componentes/home/home.component';
import LoginComponent from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './services/interceptor-service';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    BannerComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    ContactoComponent,
    NotFoundComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({

    }),
    FormsModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
