import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  mobileSize = false;

  constructor() { }

  ngOnInit(): void {

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    if (window.innerWidth >= 800) {
      this.mobileSize = false;
    } else  {
      this.mobileSize = true;
    }
  }

}
