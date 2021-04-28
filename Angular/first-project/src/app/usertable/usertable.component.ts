import { Component, OnInit } from '@angular/core';
//import Userservice no lo tengo creado xq lo que quiero viene de app
import {AppComponent} from '../../app/app.component'
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {User} from '../../app/models/user.model';


@Component({
  selector: 'usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.css']
})
export class UsertableComponent implements OnInit {

  dataSource= new UserDataSource(this.appComponent);
  displayedColumns=['nombre', 'apellidos', 'edad', 'DNI', 'cumpleaños', 'color','sexo']

  constructor(private appComponent: AppComponent) { }

  ngOnInit(): void {
  }

}

export class UserDataSource extends DataSource<any> {

 

  constructor(private appComponent: AppComponent){

    super()

  }

  connect(): Observable<User[]>{
    return this.appComponentappComponent.getValue()
  }

  disconnect(){

  }
}
