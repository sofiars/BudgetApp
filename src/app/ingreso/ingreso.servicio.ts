import { Ingreso } from "./ingreso.model";

export class IngresoServicio{
    ingresos:Ingreso[]=[
        new Ingreso("Salario",4000),
        new Ingreso("Venta Coche",500)
    ];
    eliminar(ingreso:Ingreso){
        //el indexOf sirve para que nos regrese cual es el indice del obejto que estamos recibiendo
        const indice:number = this.ingresos.indexOf(ingreso);
        this.ingresos.splice(indice, 1);
    }
}