import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormComponent } from './form/form.component';
import { MaterialModule } from './material/material.module';
//import {MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NoopAnimationsModule,
    MaterialModule,
    //MatDialogRef,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
