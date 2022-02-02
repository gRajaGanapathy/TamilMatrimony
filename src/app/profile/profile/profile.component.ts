import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isLoading = false;


  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.nbSpinner.subscribe((data: any) => {
      if (data === true || data === false) {
        this.isLoading = data;
      }
    });
  }


}
