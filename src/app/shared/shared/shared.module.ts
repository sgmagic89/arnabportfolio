import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  declarations: []
})
export class SharedModule { }
