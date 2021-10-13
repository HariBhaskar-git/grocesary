import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { productmasterUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductmasterService {

  constructor(private http: HttpClient) { }
  getRegister(): Observable<any[]> {
    return this.http.get<any>(productmasterUrl);
  }
  addproduct(val: any): Observable<any> {
    console.log(val);
    const headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');
    console.log(productmasterUrl);
    return this.http.post(productmasterUrl, val, { 'headers': headers }).pipe(
      catchError(this.handleError));
  }

  updateregister(val: any) {
    return this.http.put(productmasterUrl, val);
  }
  deleteregister(val: any) {
    return this.http.delete(productmasterUrl + val);
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
