import { Injectable } from '@angular/core';
import {Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string;

  constructor(private storage: Storage) { }

  public uploadImage($event:any){
    const file = $event.target.files[0]

    const imagRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imagRef, file)
    .then(response =>{
      this.getImages()
    })
    .catch(error=>{
      console.log(error);
    })
  }
    getImages() {
      const imageRef = ref(this.storage, 'images')
      list(imageRef)
      .then(async response =>{
        for(let item of response.items){
          this.url= await getDownloadURL(item)
        }
      })
      .catch(error => console.log(error))    
    }
}
