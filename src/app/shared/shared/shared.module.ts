import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { PinchZoomModule } from 'ngx-pinch-zoom';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    PinchZoomModule,
    MatTooltipModule
  ],
  exports: [
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    PinchZoomModule,
    MatTooltipModule
  ],
  declarations: []
})
export class SharedModule { }
