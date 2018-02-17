import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatInputModule, 
  MatProgressSpinnerModule, 
  MatCardModule, 
  MatSidenavModule,
  MatDialogModule 
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
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule,
    MatInputModule, 
    MatProgressSpinnerModule, 
    MatCardModule,
    MatSidenavModule,
    MatDialogModule 
  ],
  declarations: []
})
export class MaterialModule { }
