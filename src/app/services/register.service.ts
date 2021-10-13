import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { registerUrl } from '../config/api';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

/*  readonly ApiUrl = "http://localhost:50416/api";*/
  constructor(private http: HttpClient) { }


  getRegister(): Observable<any[]> {
    return this.http.get<any>(registerUrl);
  }
  addregister(val: any): Observable<any> {
    console.log(val);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    console.log(registerUrl);
    return this.http.post(registerUrl, val, { 'headers': headers }).pipe(
      catchError(this.handleError));
  }

  updateregister(val: any) {
    return this.http.put(registerUrl, val);
  }
  deleteregister(val: any) {
    return this.http.delete(registerUrl + val);
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
