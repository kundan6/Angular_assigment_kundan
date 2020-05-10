import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from '../dashboard/dashboard.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../authguard.service';

const routes = [
  {
      path     : 'Profile',
      component: ProfileComponent,
      canActivate: [AuthGuard]
  }
];
@NgModule({
  declarations: [ProfileComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DashboardModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
