////import { Injectable } from '@angular/core';

////@Injectable({
////  providedIn: 'root'
////})
////export class MessengerService {

////  constructor() { }
////}
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject()

  constructor() { }

  sendMsg(product: any) {
    console.log("messener service", product);
    this.subject.next(product) //Triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }
}
