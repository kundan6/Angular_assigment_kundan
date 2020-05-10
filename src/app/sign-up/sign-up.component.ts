import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private toastr: ToastrService,private router: Router,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        username: ['', Validators.required],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
    Register(){
      if(this.registerForm.value.firstName == '' || this.registerForm.value.firstName == null){
        //alert("FirstName is Mandatory!")
        this.toastr.error('FirstName is Mandatory!');
      }
      else if(this.registerForm.value.lastName == '' || this.registerForm.value.lastName == null){
        //alert("LastName is Mandatory!")
        this.toastr.error('LastName is Mandatory!');
      }
      else if(this.registerForm.value.username == '' || this.registerForm.value.username == null){
        this.toastr.error('UserName is Mandatory!');
      }
      else if(this.registerForm.value.password == '' || this.registerForm.value.password == null){
        
        this.toastr.error('Password is Mandatory!');
      }
      else{
        localStorage.setItem('_userInfo', JSON.stringify(this.registerForm.value));
        this.toastr.success('Registration is Successful!');
        
        this.router.navigate(['/SignIn']);
      }
    }

}
