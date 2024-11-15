import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {SignupResponse} from '../../models/signup-response';
import {SignupRequest} from '../../models/signup-request';


const BASE_URL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // doLogin(request: LoginRequest):Observable<LoginResponse> {
  //   return this.http.post<LoginResponse>(BASE_URL + "/doLogin", request);
  // }
  //
  // dashboard(): Observable<any> {
  //   return this.http.get<any>(BASE_URL + "/dashboard");
  // }

  doRegister(request: any):Observable<SignupResponse> {
    return this.http.post<any>(BASE_URL + "/register", request);
  }
}
