import Direction from "./modules/direction";
import { Mail } from "./modules/mail";
import {Person} from "./modules/persona";
import { Phone } from "./modules/phone";

let agenda= new Array();


function createAgenda(){
    const Person1= new Person("Quique", "Lijó Pérez", 32, 47366285, "20/12/1988","rojo","masculino",[new Direction("Av da Sardiñeira", 4, 3, "a",15007,"A Coruña","A Coruña",)],[new Mail("email","quique@velociraptor.es")],[new Phone("movil", 477685905)],["soy una notita"]);
    const Person2= new Person("Raquel", "Salomón", 33, 43544321, "13/23/1987", "verde","no care", [new Direction("Rua Relinda",23,3,"b",15009, "Santiago de compistola", "Santiago de compistola")],[new Mail("email", "raquel@rabirrubio.com")],[new Phone("fijo", 981256725)],["las cartas de raquel"]);
    const Person3 = new Person("Ana","Castillo Meyer",30,332334563, "30/23/1990", "azul","femenino",[new Direction("Calle Carcel Alta", 24, 3, "a", 18009, "Granada", "Granada")],[new Mail("email","anna@dancehall.es")],[new Phone("movil", 677868686)],["cositas de baile"]);
    agenda.push(Person1, Person2,Person3)
    console.log(JSON.parse(JSON.stringify(agenda)))
    searchPerson();
    
}


function searchPerson(){

 let result : any= window.prompt("Introduce el DNI de la Persona en tu Agenda (sin la letra)");
 let changeStreet: any= window.prompt("Cambia el nombre de la calle");
 let changeNumber: any= window.prompt("Cambia el numero del portal");
 let changePiso: any= window.prompt("Cambia el numero del Piso");
 let changeLetra: any= window.prompt("Cambia la letra del Piso");
 let changeCP: any= window.prompt("Cambia el código postal");
 let changePoblacion: any= window.prompt("Cambia la Población");
 let changeProvincia: any= window.prompt("Cambia la Provincia");
 let changeMail:any= window.prompt("Cambia el Mail");
 let changePhone:any= window.prompt("Cambia el teléfono");

   for(var i = 0; i < agenda.length; i++)
   {
       if(agenda[i].dni == result){
           let result = agenda[i];
           result.setDirection([new Direction(changeStreet,changeNumber,changePiso,changeLetra,changeCP,changePoblacion,changeProvincia)])
           result.setMail(new Mail ("mail",changeMail))
           result.setPhone(new Phone("movil", changePhone))
           console.log(agenda)
       }
   }

}

  createAgenda();
 
 







