import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './objects/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<User[]>{

    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
