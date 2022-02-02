import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
