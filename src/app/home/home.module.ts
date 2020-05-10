import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { HomeComponent } from './home.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../authguard.service';
const routes = [
  {
      path     : 'Home',
      component: HomeComponent,
      canActivate: [AuthGuard]
  }
];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DashboardModule,
    GooglePlaceModule
  ]
})
export class HomeModule { }
