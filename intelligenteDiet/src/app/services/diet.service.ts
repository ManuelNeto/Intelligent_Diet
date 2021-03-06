import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Diet} from '../models/Diet';

@Injectable()
export class DietService {

  private API;
  diet: Diet;

  constructor(private http: HttpClient) {
    this.API = `${environment.apiUrl}/diet`;
  }

  setDiet(diet) {
    this.diet = diet;
  }

  getDiet() {
    return this.diet;
  }

  getDietById(id) {
    const url = this.API + '/' + id;
    return this.http.get(url);
  }

  createDiet(diet: Diet) {
    const url = this.API;
    return this.http.post(url, diet);
  }
}
