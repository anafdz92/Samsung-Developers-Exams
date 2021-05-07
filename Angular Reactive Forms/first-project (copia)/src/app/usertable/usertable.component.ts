// import { Component, OnInit } from '@angular/core';
// //import Userservice no lo tengo creado xq lo que quiero viene de app

// import {Observable} from 'rxjs';
// import {DataSource} from '@angular/cdk/collections';
// import {User} from '../../app/models/user.model';
// import{UserService} from '../services/user.service';


// @Component({
//   selector: 'usertable',
//   templateUrl: './usertable.component.html',
//   styleUrls: ['./usertable.component.css']
// })
// export class UsertableComponent implements OnInit {

//   dataSource= new UserDataSource(this.userService);
//   displayedColumns=['nombre', 'apellidos', 'edad', 'DNI', 'cumpleaños', 'color','sexo']

//   constructor(private userService: UserService) { }

//   ngOnInit(): void {
//   }

// }

// export class UserDataSource extends DataSource<any> {

//   constructor(private userService: UserService){
//     super()
//   }

//   connect(): Observable<User[]>{
//     return this.userService.getUser();
//   }

//   disconnect(){

//   }
// }
