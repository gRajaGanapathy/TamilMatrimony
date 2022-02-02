import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { IndexComponent } from './index/index.component';
import { ProfileComponent } from './profile/profile.component';
import { NbCardModule, NbIconModule, NbLayoutModule, NbToastrModule } from '@nebular/theme';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { SharedModule } from '../shared/shared.module';


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
    NbIconModule,
    NbToastrModule,
    SharedModule
  ]
})
export class AuthModule { }