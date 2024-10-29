import { Egreso } from "./egreso.model";

export class EgresoServicio{
    egresos:Egreso[]=[
        new Egreso("Renta Deparamento",900),
        new Egreso("Ropa",200)
    ];
    eliminar(egreso:Egreso){
        //el indexOf sirve para que nos regrese cual es el indice del obejto que estamos recibiendo
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice, 1);
    }
}