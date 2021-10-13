////import { Component, OnInit } from '@angular/core';

////@Component({
////  selector: 'app-login',
////  templateUrl: './login.component.html',
////  styleUrls: ['./login.component.css']
////})
////export class LoginComponent implements OnInit {

////  constructor() { }

////  ngOnInit(): void {
////  }

////}
//import { Component, OnInit } from '@angular/core';

//@Component({
//  selector: 'app-login',
//  templateUrl: './login.component.html',
//  styleUrls: ['./login.component.css']
//})
//export class LoginComponent implements OnInit {

//  model: any = {}

//  constructor() { }

//  ngOnInit() {
//  }

//  login() {
//    console.log(this.model)
//  }

//}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  constructor(private fb: FormBuilder, private service: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      mobileno: ['', Validators.required],
      password: ['', Validators.required]

    })
  }
  loginUser() {
    console.log(this.login.value);
    this.service.userLogin(JSON.stringify(this.login.value)).subscribe(res => { alert(res.toString()); });
  }
  btnClick = () => {
    this.router.navigateByUrl('/register');
  }
}

