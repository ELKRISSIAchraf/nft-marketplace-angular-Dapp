import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user/user.module';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = "http://localhost:9191/api/users/";

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<User[]>(`${this.apiUrl}`);
  }

  getUserByName(name: any) {
    return this.httpClient.get<User>(`${this.apiUrl}/${name}`);
  }

  deleteUser(id: any) {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  persistUser(data: any) {
    return this.httpClient.post(`${this.apiUrl}`, data);
  }

  updateUser(User: any) {
    return this.httpClient.put<User>(`${this.apiUrl}/${User.id}`, User);
  }
}
