import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { HealthInsurances } from '../models/health-insurances';
import { DropdownService } from '../services/dropdown.service';
import { HealthInsurancesService } from '../services/health-insurances.service';
import { PatientsService } from '../services/patients.service';
import { FormValidations } from './../../shared/form-validations';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  form: FormGroup;
  healthInsurances: HealthInsurances[] = [];
  ufs: any[] = [];
  genders: any[] = [];
  id!: string;
  isAddMode!: boolean;

  constructor(private formBuilder: FormBuilder,
    private service: PatientsService,
    private serviceHealthInsurances: HealthInsurancesService,
    private dropdownService: DropdownService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;

      this.form = this.formBuilder.group({
        cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
        medicalRecord: [null],
        name: [null],
        lastName: [null],
        birthDate: [null],
        gender: [null],
        rg: [null],
        uF_RG: [null],
        email: [null, [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
        cellPhone: [null, [FormValidations.AtLeastOnePhone('phone')]],
        phone: [null, [FormValidations.AtLeastOnePhone('cellPhone')]],
        healthInsurancesId: [null],
        healthInsuranceNumber:[null],
        healthInsuranceDateExpirate: [null]
      });

      if (!this.isAddMode) {
        this.service.getById(this.id)
            .subscribe(x => this.form.patchValue(x));
      }

      this.serviceHealthInsurances.list()
      .subscribe(dados => this.healthInsurances = dados);

      this.ufs = this.dropdownService.getUF();
      this.genders = this.dropdownService.getGender();
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.isAddMode) {
      this.createPatient();
    } else {
      this.updatePatient();
    }
  }

  private createPatient(){
    this.service.save(this.form.value)
      .subscribe(result => this.onSuccess(), error => this.onError(error));
  }

  private updatePatient() {
    this.service.update(this.id, this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError(error));
  }

  onCancel() {
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private onSuccess() {
    this.snackBar.open('Paciente salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

  private onError(error: any) {
    const err = JSON.parse(JSON.stringify(error.error));
    var msgErro = 'Erro ao salvar paciente.';

    if (err.CPF){
      msgErro = msgErro+' '+err.CPF[0];
    }

    this.snackBar.open(msgErro.trim(), '', { duration: 5000 });
  }
}
