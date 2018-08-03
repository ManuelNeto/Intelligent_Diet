import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Alimento} from '../models/Alimento';

@Injectable()
export class AlimentoService {

  private API;

  constructor(private http: HttpClient) {
    this.API = `${environment.apiUrl}/food`;
  }

  getAlimentosByType(type) {
    const url = this.API + '/getAlimentos/' + type;
    return this.http.get(url);
  }

  getAlimentos() {
    const url = this.API + '/getAlimentos';
    return this.http.get(url);
  }

  createAlimento(alimento: Alimento) {
    const url = this.API + '/createAlimento';
    return this.http.post(url, alimento);
  }

  updateAlimento(alimento: Alimento) {
    const url = this.API + '/updateAlimento';
    return this.http.put(url, alimento);
  }

  deleteAlimento(id) {
    const url = this.API + '/deleteAlimento/' + id;
    return this.http.delete(url);
  }
}
