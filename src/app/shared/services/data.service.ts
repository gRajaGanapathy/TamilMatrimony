import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any;

  constructor() { }

  private spinner = new BehaviorSubject({});
  nbSpinner = this.spinner.asObservable();

  checkSpinner(data: any) {
    this.spinner.next(data);
  }

  private count = new BehaviorSubject({});
  countList = this.spinner.asObservable();

  checkCountList(data: any) {
    this.spinner.next(data);
  }
}
