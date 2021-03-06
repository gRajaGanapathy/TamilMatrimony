import { animate, keyframes, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { swiperight, swipeleft, User } from 'src/app/shared/constant';
import { HttpClient } from "@angular/common/http";
import { DataService } from '../../shared/services/data.service';
import { debounceTime } from 'rxjs/operators';



@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(swiperight))),
      transition('* => swipeleft', animate(750, keyframes(swipeleft)))
    ])
  ]
})
export class ProfileListComponent implements OnInit {
  users: User[] = [];
  index = 0;
  animationState: string | any;
  eventText: string | any;
  interestedUser: any = [];
  notInterestedUser: any = [];
  shortListeduser: any = [];

  constructor(
    private toasterService: NbToastrService, private httpClient: HttpClient, private dataService: DataService
  ) { }

  ngOnInit() {
    this.getUserList();
  }

  startAnimation(value: any) {
    this.dataService.checkSpinner(true);
    this.interestedUser;
    this.notInterestedUser;
    this.shortListeduser;
    if (!this.animationState) {
      const duration = 800;
      this.index++;
      if (this.users.length === this.index) {
        this.index = 0;
      }
      if (value === 'swipeleft') {
        this.toasterService.danger('', 'Not Interested', { duration });
        this.notInterestedUser.push([this.users[this.index]]);
      } else if (value === 'swiperight') {
        this.toasterService.success(' ', 'Interested', { duration });
        this.interestedUser.push([this.users[this.index]]);
      } else {
        this.toasterService.primary(' ', 'Shortlisted', { duration });
        this.shortListeduser.push([this.users[this.index]]);
      }
      const payload = {
        interested: this.interestedUser,
        notInterested: this.notInterestedUser,
        shortlisted: this.shortListeduser
      }
      this.dataService.checkCountList(payload);
      this.animationState = value;
      setTimeout(() => {
        this.dataService.checkSpinner(false);
      }, 800);
    }
  }

  resetAnimationState(state: any) {
    this.animationState = '';
  }

  getUserList(): void {
    this.dataService.checkSpinner(true);
    this.httpClient.get<any>('assets/profile_detail.json')
      .pipe(
        debounceTime(2000))
      .subscribe((data: any) => {
        setTimeout(() => {
          this.dataService.checkSpinner(false);
        }, 800);
        this.users = data.profile_details;
      });
  }

  onSwipeRight(event: any) {
    this.startAnimation('swiperight')
  }

  onSwipeLeft(event: any) {
    this.startAnimation('swipeleft')
  }
}
