import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HealthInsurances } from '../models/health-insurances';

@Injectable({
  providedIn: 'root'
})
export class HealthInsurancesService {

  private readonly API = 'https://localhost:44319/v1/HealthInsurances';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<HealthInsurances[]>(this.API)
    .pipe();
  }
}
