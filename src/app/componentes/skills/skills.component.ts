import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { TokenService } from 'src/app/services/token.service';
import { SkillsService } from '../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
skill: Skills[] = [];
  constructor(private skillS: SkillsService, private tokenService: TokenService) { }
 isLogged = false;
  ngOnInit(): void {
    this.cargarSkills();
      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
    }

    cargarSkills(): void {
      this.skillS.lista().subscribe(data => {
        this.skill = data;
      })


  }

  delete(id?: number) {
    if (id != undefined) {
      this.skillS.delete(id).subscribe({
        next: (data) => {
          this.cargarSkills();
        },
        error: (err) => {
          alert('No se pudo borrar la experiencia');
        }
      })
    }
  }
}

 
  

  
