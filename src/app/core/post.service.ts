import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './objects/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAll() : Observable<Post[]>{

    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
