import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../../services/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from '../../model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
nombreE: string;
descripcionE : string;

  constructor(private educacionS : EducacionService, private router : Router) { }

  ngOnInit(): void {
  }


  onCreate(): void {
    const educacion = new Educacion(this.nombreE, this.descripcionE);
     this.educacionS.save(educacion).subscribe({
      next: data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, error: err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    });
  }
}
