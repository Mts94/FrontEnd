import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from '../../services/s-experiencia.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
expe : Experiencia[] = [];
  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService) { }
    IsLogged = false;
  ngOnInit(): void {
    this.cargarExperiencia();
      if(this.tokenService.getToken()){
        this.IsLogged = true;
      } else{

        this.IsLogged = false;
      }
  }



cargarExperiencia():void{
  this.sExperiencia.lista().subscribe(data => {this.expe = data;})
 }
}
