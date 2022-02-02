import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  getUserList(payload: any): any {
    this.httpClient.get<any>(payload.value)
      .pipe(
        debounceTime(2000))
      .subscribe((data: any) => {
        this.users = data.profile_details;
      });
  }

  private spinner = new BehaviorSubject({});
  nbSpinner = this.spinner.asObservable();

  checkSpinner(data: any) {
    this.spinner.next(data);
  }
}
