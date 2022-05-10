import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "admin";
  password: string = "admin123";
  result: string = "";

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  public submit_click(): void {
    if (this.username == 'admin' && this.password == 'admin123') {
      this.route.navigate(['']);
    }
  }


}
