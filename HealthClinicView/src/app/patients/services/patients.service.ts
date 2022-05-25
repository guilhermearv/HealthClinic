import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs';

import { Patients } from '../models/patients';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  private readonly API = 'https://localhost:44319/v1/Patients';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Patients[]>(this.API)
    .pipe();
  }

  getById(id: string) {
    return this.httpClient.get<Patients>(`${this.API}/${id}`)
    .pipe();
  }

  save(record: Patients) {
    return this.httpClient.post<Patients>(this.API, record).pipe(first());
  }

  update(id: string, record: Patients) {
    return this.httpClient.put<Patients>(`${this.API}/${id}`, record);
  }
}
