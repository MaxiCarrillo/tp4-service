import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Video } from 'src/app/models/video';


@Component({
  selector: 'app-page-d',
  templateUrl: './page-d.component.html',
  styleUrls: ['./page-d.component.css']
})
export class PageDComponent {

  error:string='';
  cargar: boolean = false;
  video!:Video;

  constructor(private youtubeService: YoutubeService, private sanitizer: DomSanitizer) {

  }

  buscarTexto(valor: string) {
    this.error='';
    if (valor != '') {
      this.youtubeService.obtenerVideo(valor).subscribe(
        result => {
          this.video = new Video();
          if(!result.error){
            this.video.id = result['results'][0].id;
            this.video.titulo = result['results'][0].title;
            this.video.fecha = result['results'][0].uploadedAt;
            this.video.vistas =  result['results'][0].views;
            this.video.nombreCanal = result['results'][0].channel.name;
            this.video.canalFoto = result['results'][0].channel.icon;
            this.cargar = true;
          }else{
            this.error = "No se han encontrado resultados.";
          }
        },
        error => {
          console.log(error);
        }
      );
    }else{
      this.cargar = false;
    }
  }

  getSafeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+url);
  }

}
