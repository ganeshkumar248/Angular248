import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  ngOnInit(): void {
  }

  login_submit() {
    if(this.username == "admin" && this.password == "admin123") {
      alert('user logged successfully');
    } else {
      alert('Invalid credentials');
    }
  }
 
}
 