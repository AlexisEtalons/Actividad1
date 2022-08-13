import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class DataServices {
  constructor(private http: HttpClient) {}
  
  getPosts(): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get<any>(url);
  }

  getUsers():Observable<any> {
    const url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<any>(url);
  }
}
