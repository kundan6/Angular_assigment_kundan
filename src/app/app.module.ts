import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeModule } from './home/home.module';
import { SignInModule } from './sign-in/sign-in.module';
import { SignUpModule } from './sign-up/sign-up.module';
import { Page404Component } from './page404/page404.component';
import { ProfileModule } from './profile/profile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
 
const appRoutes: Routes = [
  {
      path      : '',
      redirectTo: 'SignIn',
      pathMatch: 'full'
  },
  {
      path      : '**',
      component : Page404Component,
  }
];
@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    HomeModule,    
    ToastrModule,
    SignInModule,
    SignUpModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
