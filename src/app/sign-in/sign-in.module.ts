import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from './sign-in.component';
const routes = [
  {
      path     : 'SignIn',
      component: SignInComponent
  }
];
@NgModule({
  declarations: [SignInComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignInModule { }
