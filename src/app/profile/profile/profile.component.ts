import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { NbToastrService } from '@nebular/theme';
import { User } from 'src/app/shared/constant';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoading = false;
  dataList: any;
  users: User[] = [];
  index = 0;
  animationState: string | any;
  eventText: string | any;
  interestedUser: any = [];
  notInterestedUser: any = [];
  shortListeduser: any = [];
  mobileReSize = false;


  constructor(
    private toasterService: NbToastrService, private httpClient: HttpClient, private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.nbSpinner.subscribe((data: any) => {
      if (data === true || data === false) {
        this.isLoading = data;
      }
    });
    this.dataService.countList.subscribe((res: any) => {
      if (res) {
        this.dataList = res;
      }
    })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if (window.innerWidth >= 800) {
      this.mobileReSize = false;
    } else  {
      this.mobileReSize = true;
    }
  }


}
