import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';

const routes = [
  {
      path     : 'SignUp',
      component: SignUpComponent
  }
];
@NgModule({
  declarations: [SignUpComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SignUpModule { }
