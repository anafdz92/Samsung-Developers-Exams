import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogFormComponent} from './dialog-form/dialog-form.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people:any[];


  constructor(
    public dialog:MatDialog
    
  ){
    this.people=[]
    
  }

  // ngOnInit() {
  //   this.updateTableUsers();
  //   }

  openDialog():void{
   const dialogRef=this.dialog.open(DialogFormComponent);
   dialogRef.afterClosed().subscribe(res=>{
     this.people.push(res)
     console.group(this.people)


   })
  }

  selectedValue='string';
  minDate=new Date(1930,0,1);
  maxDate= new Date( );
}
