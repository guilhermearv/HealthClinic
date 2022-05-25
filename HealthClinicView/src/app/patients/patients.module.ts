import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgxMaskModule } from 'ngx-mask';

import { SharedModule } from './../shared/shared.module';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [
    PatientsComponent,
    PatientFormComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatRadioModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class PatientsModule { }
