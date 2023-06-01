import { Component } from '@angular/core';
import { Cancion } from 'src/app/models/cancion';
import { MusicaService } from 'src/app/services/musica.service';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css']
})

export class PageAComponent {

  canciones: Array<Cancion> = [
    { id: 13262488, titulo: "", artista: "", fecha: "", preview: "", img: ""},
    { id: 537033822, titulo: "", artista: "", fecha: "", preview: "", img: ""},
    { id: 13255835, titulo: "", artista: "", fecha: "", preview: "", img: ""},
    { id: 13267278, titulo: "", artista: "", fecha: "", preview: "", img: ""},
    { id: 383990211, titulo: "", artista: "", fecha: "", preview: "", img: ""},
    { id: 535983052, titulo: "", artista: "", fecha: "", preview: "", img: ""}
  ];

  constructor(private musicaService: MusicaService) { 
    this.obtenerCanciones();
  }

  obtenerCanciones() {
    for (let i = 0; i < this.canciones.length; i++) {
      this.musicaService.getCancion(this.canciones[i].id).subscribe(
        result => {
          this.canciones[i].titulo = result.title;
          this.canciones[i].artista = result.artist.name;
          this.canciones[i].fecha = result.release_date;
          this.canciones[i].img = result.album.cover_big;
          this.canciones[i].preview = result.preview;
        },
        error => {
          console.log("Error: " + error);
        }
      );
    }
  }
}
