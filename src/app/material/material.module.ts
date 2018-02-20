import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule, 
  MatSidenavModule,
  MatDialogModule, 
  MatOptionModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule,
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatSidenavModule,
    MatDialogModule,
    MatOptionModule,
    MatSelectModule
  ],
  declarations: []
})
export class MaterialModule { }
