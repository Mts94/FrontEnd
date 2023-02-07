import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona: persona = null;
  constructor(
    public personaService: PersonaService,
    private tokenservice: TokenService
  ) {}
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenservice.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personaService.detail(1).subscribe((data) => {
      this.persona = data;
    });
  }
}
