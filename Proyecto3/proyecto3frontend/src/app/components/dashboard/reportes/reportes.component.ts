import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params  } from '@angular/router';
import { detalleModelo } from 'src/app/interfaces/detalleModelo';
import { ReporteService } from 'src/app/services/reporte.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  idModelo = -1;
  listDetalleModelos: detalleModelo[] = [];

  longText = `El Mazda 3 es un coche perteneciente al segmento C fabricado por la marca japonesa de automóviles Mazda. Se construye desde 2003 como el sucesor del Mazda.`;
  constructor(private rutaActiva: ActivatedRoute, private _reporteService: ReporteService) { }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(
      (params: Params)=>{
        this.idModelo = params['idmodelo'];
        console.log(this.idModelo)
      }
    );
   this.cargarTarjetas();
  }

  cargarTarjetas(){
    if(typeof this.idModelo === "undefined"){
      this._reporteService.getAllInfo().subscribe(data=>{
        this.listDetalleModelos = data;
        console.log(data);
      })
    }else{
      this._reporteService.getIndexInfo(this.idModelo).subscribe(data=>{
        //this.listDetalleModelos = data;
        this.listDetalleModelos = Object.values(data);
        console.log(data);
      })
    }
  }


}
