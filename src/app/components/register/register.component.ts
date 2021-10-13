////import { Component, OnInit } from '@angular/core';

////@Component({
////  selector: 'app-register',
////  templateUrl: './register.component.html',
////  styleUrls: ['./register.component.css']
////})
////export class RegisterComponent implements OnInit {

////  constructor() { }

////  ngOnInit(): void {
////  }

////}
//import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms'

///**
// *
// * @param form
// */

//function passwordsMatchValidator(form:any) {
//  const password = form.get('password')
//  const confirmPassword = form.get('confirmPassword')

//  if (password.value !== confirmPassword.value) {
//    confirmPassword.setErrors({ passwordsMatch: true })
//  } else {
//    confirmPassword.setErrors(null)
//  }

//  return null
//}

///**
// * If the data is valid return null else return an object
// */
//function symbolValidator(control:any) { //control = registerForm.get('password')
//  if (control.hasError('required')) return null;
//  if (control.hasError('minlength')) return null;

//  if (control.value.indexOf('@') > -1) {
//    return null
//  } else {
//    return { symbol: true }
//  }
//}

//@Component({
//  selector: 'app-register',
//  templateUrl: './register.component.html',
//  styleUrls: ['./register.component.css']
//})
//export class RegisterComponent implements OnInit {

//  registerForm!: FormGroup;

//  constructor(private builder: FormBuilder) { }

//  ngOnInit() {
//    this.buildForm()
//  }

//  buildForm() {
//    this.registerForm = this.builder.group({
//      name: ['', Validators.required],
//      email: ['', [Validators.required, Validators.email]],
//      username: ['', Validators.required],
//      password: ['', [Validators.required, symbolValidator, Validators.minLength(4)]],
//      confirmPassword: ''
//    }, {
//      validators: passwordsMatchValidator
//    })
//  }

//  register() {
//    console.log(this.registerForm.value)
//  }

//}
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;
  //registerform: FormGroup;
  constructor(private fb: FormBuilder, private service: RegisterService) { }

  //registerList: any = [];
  //fullname: string = "";
  //mobileno: string = "";
  //emailid: string = "";
  createdDate: Date = new Date();
  //mobileno: string;
  //emailid: string;

  //public registerForm = new FormGroup({
  //  first_name: new FormControl('fullname'),
  //  last_name: new FormControl('mobileno'),
  //});
  ngOnInit(): void {

    this.register = this.fb.group({
      fullname: ['', Validators.required],
      mobileno: ['', Validators.required],
      emailid: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      location: ['', Validators.required]
    })
  }

  refreshRegisterList() {
    // this.service.getRegister().subscribe(data => { this.register = data;})
  }

  saveUser() {
        this.service.addregister(JSON.stringify(this.register.value)).subscribe(res => { alert(res.toString()); });
  }

}
