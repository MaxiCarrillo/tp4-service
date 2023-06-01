import { Component } from '@angular/core';
import { Moneda } from 'src/app/models/moneda';
import { CotizacionService } from 'src/app/services/cotizacion.service';

@Component({
  selector: 'app-page-b',
  templateUrl: './page-b.component.html',
  styleUrls: ['./page-b.component.css']
})

export class PageBComponent {

  cantidad!:string;
  de:string = "USD";
  a:string = "ARS";
  resultado!:string;
  monedas!:Array<Moneda>;
  moneda!:Moneda;

  constructor(private cotizacionService:CotizacionService){
    this.getCodigosInternacionales();
  }

  cotizar(){
    this.cotizacionService.convertir(this.cantidad,this.de,this.a).subscribe(
      result=>{
        this.resultado=result.result+" "+this.a;
      },
      error=>{
        alert("Error en la peticion");
      }
    );
  }


  getCodigosInternacionales(){
    this.cotizacionService.getMonedas().subscribe(
      result=>{
        this.monedas = new Array<Moneda>();
        result.forEach((element:any)=>{
          this.moneda = new Moneda();
          Object.assign(this.moneda, element);
          this.monedas.push(this.moneda);
        });
      },
      error=>{
        console.log("Error en la peticion");
      }
    );
  }

}
