import { animate, keyframes, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { Subject } from 'rxjs';
import { swiperight, swipeleft, User } from 'src/app/shared/constant';
import { HttpClient } from "@angular/common/http";



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
  @Input()
  parentSubject: Subject<any> | any;



  animationState: string | any;
  eventText: string | any;
  constructor(
    private toasterService: NbToastrService, private httpClient: HttpClient
  ) {  }

  ngOnInit() {
    this.getUserList();
    this.parentSubject.subscribe((event: any) => {
      console.log('event in gesture', event)
      this.startAnimation(event)
    });
  }

  startAnimation(state: any) {
    console.log('state', state)
    if (!this.animationState) {
      const duration = 800;
      if (state === 'swipeleft') {
        this.toasterService.danger('', 'Not Interested', {duration});
      } else if (state === 'swiperight') {
        this.toasterService.success(' ', 'Interested', {duration});
      } else if(state === 'shortlist'){
        this.toasterService.show(' ', 'Shortlisted', {duration});
      }
      this.animationState = state;
    }
  }

  resetAnimationState(state: any) {
    console.log('state', state)
    this.animationState = '';
    this.index++;
  }


  onSwipe(evt:any) {
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 'right' : 'left'):'';
    const y = Math.abs(evt.deltaY) > 40 ? (evt.deltaY > 0 ? 'down' : 'up') : '';

    this.eventText += `${x} ${y}<br/>`;
}
  getUserList(): void{
    this.httpClient.get<any>('assets/profile_detail.json').subscribe((data: any)=>{
      this.users = data.profile_details
      });
  }

  ngOnDestroy() {
    this.parentSubject.unsubscribe();
  }
  onSwipeRight(event:any) {
    this.startAnimation('swiperight')
  }

  onSwipeLeft(event:any) {
    this.startAnimation('swipeleft')
  }
  
}
