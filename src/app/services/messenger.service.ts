import { Injectable } from '@angular/core';
import {Subject} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class MessengerService {
subject = new Subject()
  constructor() { }
  sendMsg(productArray: unknown)
  {
    console.log(productArray)
    this.subject.next(productArray)
  }
  getMsg()
 {
  return this.subject.asObservable()
 }
}
