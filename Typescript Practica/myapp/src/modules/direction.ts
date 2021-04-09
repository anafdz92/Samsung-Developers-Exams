

 export default class Direction{
    calle:string;
    numero:number;
    piso:number;
    letra:string;
    codigoPostal:number;
    poblacion:string;
    provincia:string;

    constructor(calle:string, numero:number,piso:number, letra: string, codigoPostal:number, poblacion:string, provincia:string ){

        this.calle=calle;
        this.numero=numero;
        this.piso=piso;
        this.letra=letra;
        this.codigoPostal=codigoPostal;
        this.poblacion=poblacion;
        this.provincia=provincia;

    }

    
    


}
