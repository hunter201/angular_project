import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register() {

  }

  login(user: User) {
    
  }

  constructor(private http: HttpClient) { }
}
