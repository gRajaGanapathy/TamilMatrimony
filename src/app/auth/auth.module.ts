import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { NbCardModule, NbIconModule, NbLayoutModule } from '@nebular/theme';
import { ProfileListComponent } from './profile-list/profile-list.component';


@NgModule({
  declarations: [
    IndexComponent,
    ProfileComponent,
    ProfileListComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbIconModule
  ]
})
export class AuthModule { }
