import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }


  PostNewUser(data:any): Observable<any> {
    
    return this.http.post('https://67cea6ee125cd5af757b6514.mockapi.io/Users',data)
  }
  getAllUsers(): Observable<any> {

    return this.http.get('https://67d293c190e0670699be2962.mockapi.io/logged')
  }
}
