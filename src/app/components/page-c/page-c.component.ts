import { Component } from '@angular/core';
import { Signo } from 'src/app/models/signo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css']
})

export class PageCComponent {

  signos:Array<Signo> = [
    { signo:"aries", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"aries.jpg"},
    { signo:"taurus", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"tauro.jpg"},
    { signo:"gemini", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"geminis.jpg"},
    { signo:"cancer", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"cancer.jpg"},
    { signo:"leo", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"leo.jpg"},
    { signo:"virgo", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"virgo.jpg"},
    { signo:"libra", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"libra.jpg"},
    { signo:"scorpio", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"escorpio.jpg"},
    { signo:"sagittarius", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"sagitario.jpg"},
    { signo:"capricorn", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"capricornio.jpg"},
    { signo:"aquarius", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"aquario.jpg"},
    { signo:"pisces", descripcion: "", compatibilidad:"",debilidad:"",fecha:"",img:"piscis.jpg"}
  ];

  constructor(private horoscopoService:HoroscopoService){
    this.obtenerSignos();
  }

  obtenerSignos(){
    for(let i=0;i<this.signos.length;i++){
      this.horoscopoService.getSigno(this.signos[i].signo).subscribe(
        result=>{
          this.signos[i].compatibilidad = result.compatibility;
          this.signos[i].debilidad = result.weaknesses;
          this.signos[i].descripcion = result.about;
          this.signos[i].fecha = result.date_range;
        },
        error=>{
          console.log("Error en la peticion");
        }
      );
    }
  }
}
