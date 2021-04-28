import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import {FormBuilder,FormControl,FormGroup, Validators,} from '@angular/forms';
import {customValidationService } from '../custom-validation.service';



@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {

  myForm:FormGroup;

  constructor(
    public dialogRef:MatDialogRef<DialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder

  ) { 
    this.myForm = new FormGroup({
      nombre: new FormControl('', [Validators.required,Validators.minLength(3)]),
      apellidos: new FormControl('', [Validators.required,Validators.minLength(3)]),
      edad: new FormControl('', [Validators.required, customValidationService.checkLimit(0,125)]),
      DNI: new FormControl('', [Validators.required,Validators.minLength(9)]),
      cumpleaños: new FormControl('', Validators.required),
      color: new FormControl('', [Validators.required,Validators.minLength(3)]),
      sexo: new FormControl('', [Validators.required,Validators.minLength(3)]),  })
  }

  ngOnInit(): void{


this.myForm.valueChanges.subscribe(console.log);
  }

  private createForm() {
    
    
  }

  onclickNo():void{
    this.dialogRef.close(this.myForm.value)
  }
  
  onSubmit(){
   
  }

}

