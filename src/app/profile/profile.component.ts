import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  registerForm: FormGroup;userLoggedInfo:any;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userLoggedInfo = localStorage.getItem('_userInfo') ? JSON.parse(localStorage.getItem('_userInfo')) : '';
    this.registerForm = this.formBuilder.group({
      firstName: [this.userLoggedInfo.firstName],
      lastName: [this.userLoggedInfo.lastName],
      username: [this.userLoggedInfo.username],
      password: [this.userLoggedInfo.password]
  });
  }

}
