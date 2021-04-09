import Direction from "./direction"
import {Phone} from "./phone"
import {Mail} from "./mail"

// type Sexo="hombre"|"mujer"

export class Person{
    protected nombre:string;
    protected  apellidos:string;
    protected  edad:number;
    protected  dni:number;
    protected  cumpleaños:string;
    protected  colorFavorito?:string;
    protected  sexo: string;
    protected  direcciones:Direction[];
    protected  mails:Mail[];
    protected  telefonos:Phone[];
    protected  notas?:string[];

    //public o private??
    //herencia

    constructor(nombre:string, apellidos:string,edad:number, dni:number, cumpleaños:string,colorFavorito:string,sexo:string, direcciones:Direction[], mails:Mail[], telefonos:Phone[], notas:string[] ){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
        this.dni=dni;
        this.cumpleaños=cumpleaños;
        this.colorFavorito=colorFavorito;
        this.sexo=sexo;
        this.direcciones=direcciones;
        this.mails=mails;
        this.telefonos=telefonos;
        this.notas=notas

    }

    getDni():number{
        return this.dni
    }

    setDni(dni:number){
        this.dni=dni
    }

    setDirection(direcciones:Direction[]){
        this.direcciones= direcciones;
    }

    setMail(mails:Mail[]){
        this.mails=mails;
    }

    setPhone(telefonos:Phone[]){
        this.telefonos=telefonos;
    }
}