import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills';

@Component({
  selector: 'app-new-skill',
  templateUrl: './new-skill.component.html',
  styleUrls: ['./new-skill.component.css']
})
export class NewSkillComponent implements OnInit {
nombre: string;
porcentaje: number;
  constructor(private skills: SkillsService, private router: Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const skill = new Skills(this.nombre, this.porcentaje);
    this.skills.save(skill).subscribe({
      next: data => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, error: err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    });
  }
}
