import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/User';

@Injectable()
export class UserService {

  private API;

  constructor(private http: HttpClient) {
    this.API = `${environment.apiUrl}/user`;
  }

  getUserById(id) {
    const url = this.API + '/' + id;
    return this.http.get(url);
  }

  getUsers() {
    const url = this.API;
    return this.http.get(url);
  }

  createUser(user: User) {
    const url = this.API;
    return this.http.post(url, user);
  }

  updateAlimento(user: User) {
    const url = this.API;
    return this.http.put(url, user);
  }

}
