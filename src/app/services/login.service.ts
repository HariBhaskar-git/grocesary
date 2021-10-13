import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { loginUrl } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

 /* readonly ApiUrl = "http://localhost:50416/api";*/
  constructor(private http: HttpClient) { }

  userLogin(val: any): Observable<any> {

    console.log(val);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    console.log(loginUrl + '/GetuserLogin');
    return this.http.post<any>(loginUrl + '/GetuserLogin', val, { 'headers': headers }).pipe(

      catchError(this.handleError));
  }

  getLogin(val: any): Observable<any[]> {
    return this.http.get<any>(loginUrl);
  }
  addLogin(val: any) {
    return this.http.post(loginUrl, val);
  }

  updateLogin(val: any) {
    return this.http.put(loginUrl, val);
  }
  deleteLogin(val: any) {
    return this.http.delete(loginUrl + val);
  }

  private handleError(err: HttpErrorResponse) {
    let errMsg: string = "";
    if (err.error instanceof Error) {
      console.log('an error occured', err.error.message);
      errMsg = err.error.message;
    }
    else {
      console.log('backend error', err.status);
      errMsg = err.error.status;
    }
    return throwError(errMsg);
  }
}
