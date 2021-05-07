import { Form, FormControl } from "@angular/forms";
import {customValidationService } from './../custom-validation.service';

export interface Usuario{
    nombre: String,
    apellido:String,
    edad: number,
    dni:number,
    cumple:number,
    color:string,
    sexo:string
  }