import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from 'src/app/services/persona.service';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-edit-acerde',
  templateUrl: './edit-acerde.component.html',
  styleUrls: ['./edit-acerde.component.css']
})
export class EditAcerdeComponent implements OnInit {
persona: persona = null;


  constructor(private activatedRouter: ActivatedRoute , private personaService: PersonaService,private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe({
      next: (data) => {
        this.persona = data;
      },
      error: (err) => {
        alert('Error al modificar persona');
        this.router.navigate(['']);
      }
    });
  }


  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.personaService.update(id, this.persona).subscribe({
      next: (data) => {
        this.router.navigate(['']);
      },
      error: (err) => {
        alert('Error al modificar la persona');
        this.router.navigate(['']);
      }
    });

  }


  uploadImage($event:any ){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = 'perfil_' + id;
    this.imageService.uploadImage($event)

  }
}
