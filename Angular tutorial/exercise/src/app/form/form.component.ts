import { Component, OnInit } from '@angular/core';
import {Usuario}from './../usuario';
//import {Validators,} from '@angular/forms';
//import {customValidationService } from './../../custom-validation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

 accion : string='insertar';
 posicion : any=null;

 listaUsuarios: Array<Usuario>=[
  
 ]

 usuario: Usuario={
   nombre:"",
   apellido:"",
   edad:0,
   dni:null,
   cumple:null,
   color:"",
   sexo:""
 }

 registrarUsuario():void{
   if(this.accion==='insertar'){
    if (this.usuario.edad>0 && this.usuario.edad < 125) {
      
    this.listaUsuarios.push(this.usuario)
    }
    else{
      alert("la edad debe estar entre 0 y 125")
    }



    this.listaUsuarios.push(this.usuario)
  
   }else{
     this.listaUsuarios[this.posicion]=this.usuario;
     
    }
    this.usuario={
      nombre:"",
      apellido:"",
      edad:0,
      dni:null,
      cumple:null,
      color:"",
      sexo:""
   }
  
   }  
   

 editar(index:number):void{
    this.usuario=this.listaUsuarios[index]
    this.accion='actualizar'
    this.posicion=index;
  
}

  eliminar(index:number){
    this.listaUsuarios.splice(index,1)
    this.usuario={
      nombre:"",
      apellido:"",
      edad:0,
      dni:null,
      cumple:null,
      color:"",
      sexo:""
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
