import { Component, OnInit } from '@angular/core';
import {Usuario}from './../usuario';



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
   edad:null,
   dni:null,
   cumple:null,
   color:"",
   sexo:""
 }

 registrarUsuario():void{
   
   if(this.accion==='insertar'){
    if(this.usuario.nombre &&
      this.usuario.apellido && 
      this.usuario.dni && 
      this.usuario.cumple && 
      this.usuario.color &&
      this.usuario.sexo &&
      this.usuario.edad){
        if(this.usuario.edad>0 && 
          this.usuario.edad < 125){
            this.listaUsuarios.push(this.usuario)
          }else{
            alert("La edad debe estar entre 0 y 120")
          }
 
    } else{
     alert("Todos los campos son obligatorios")
    }
    
  
  }else{
      this.listaUsuarios[this.posicion]=this.usuario;
      this.accion='insertar'
     
     }
     this.usuario={
       nombre:"",
       apellido:"",
       edad:null,
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
      edad:null,
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
