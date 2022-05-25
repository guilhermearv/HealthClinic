import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Patients } from './../models/patients';
import { PatientsService } from './../services/patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.scss']
})
export class PatientsComponent implements OnInit {

  patients$: Observable<Patients[]>;
  displayedColumns = ['CPF','Name','LastName','Phone','CellPhone','actions'];



  constructor(
    private patientsService: PatientsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.patients$ = this.patientsService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar');
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }

  onAdd(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(id: string){
    this.router.navigate(['edit/'+id], {relativeTo: this.route});
  }

  onError(errorMsg: string): void {
    this.dialog.open(ErrorDialogComponent, {
      width: '250px',
      data: errorMsg,
    });
  }

}
