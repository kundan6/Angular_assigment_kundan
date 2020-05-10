import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../authguard.service';

const routes = [
  {
      path     : 'Dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
  }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
