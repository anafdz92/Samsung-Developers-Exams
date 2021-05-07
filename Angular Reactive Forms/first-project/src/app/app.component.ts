import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogFormComponent} from './dialog-form/dialog-form.component';
import {User} from '../app/models/user.model'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  people:User[];

  constructor(
    public dialog:MatDialog
  ){
    this.people=[]
  }

  openDialog():void{
   const dialogRef=this.dialog.open(DialogFormComponent);
   dialogRef.afterClosed().subscribe(res=>{
     this.people.push(res)
     console.group(this.people)

   })
  }

  getValue(){
    return this.people;
  }

  selectedValue='string';
  minDate=new Date(1930,0,1);
  maxDate= new Date( );
}
