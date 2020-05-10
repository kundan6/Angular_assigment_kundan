import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;userLoggedInfo:any;
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.userLoggedInfo = localStorage.getItem('_userInfo') ? JSON.parse(localStorage.getItem('_userInfo')) : '';
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required,]
        });
  }
  Login(){
    if(this.loginForm.value.username == '' || this.loginForm.value.username == null){
      //alert("UserName is Mandatory!")
      this.toastr.error('UserName is Mandatory!');
    }
    else if(this.loginForm.value.password == '' || this.loginForm.value.password == null){
      //alert("Password is Mandatory!")
      this.toastr.error('Password is Mandatory!');
    }
    else{
      if((this.userLoggedInfo.username == this.loginForm.value.username) && (this.userLoggedInfo.password == this.loginForm.value.password)){
        this.router.navigate(['/Home']);
      }
      else{
        alert("Wrong Credentails!")
        this.toastr.success('Wrong Credentails!');
      }
      
    }
  }

}
