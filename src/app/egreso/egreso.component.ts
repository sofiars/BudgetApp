import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoServicio } from './egreso.servicio';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];
  constructor(private egresoServicio:EgresoServicio) { }
  @Input() ingresoTotal:number;

  ngOnInit(): void {
    this.egresos = this.egresoServicio.egresos;
  }
  eliminarEgreso(egreso:Egreso){
    this.egresoServicio.eliminar(egreso);
  }
  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
