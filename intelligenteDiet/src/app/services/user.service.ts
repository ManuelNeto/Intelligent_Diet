import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../models/User';

@Injectable()
export class UserService {

  private API;

  private user;
  constructor(private http: HttpClient) {
    this.API = `${environment.apiUrl}/user`;
  }

  setUser(user) {
    this.user = user;
  }

  getUser() {
    return this.user;
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

  updateUser(user: User) {
    const url = this.API;
    return this.http.put(url, user);
  }

}
