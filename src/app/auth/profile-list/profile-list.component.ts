import { animate, keyframes, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { profile_details, swiperight, swipeleft, User } from 'src/app/shared/constant';
// import User from 'user';


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
  public users: any = profile_details;

  public index = 0;
  @Input()
  parentSubject: Subject<any> | any;



  animationState: string | any;
  eventText: string | any;
  constructor() { }

  ngOnInit() {
    console.log('swipeleft', swipeleft)
    console.log('profile_details', this.users)
    this.parentSubject.subscribe((event: any) => {
      console.log('event in gesture', event)
      this.startAnimation(event)
    });
  }

  startAnimation(state: any) {
    console.log('state', state)
    if (!this.animationState) {
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
