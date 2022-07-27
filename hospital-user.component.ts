import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Role {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-hospital-user',
  templateUrl: './hospital-user.component.html',
  styleUrls: ['./hospital-user.component.css']
})
export class HospitalUserComponent implements OnInit {

  title = 'practice-management';

  formGroup!: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  form: FormGroup = new FormGroup({});
  selectedValue: string = "";

  roles: Role[] = [
    {value: 'admin', viewValue: 'Admin'},
    {value: 'physician', viewValue: 'Physician'},
    {value: 'nurse', viewValue: 'Nurse'},
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    // this.setChangeValidate()
    this.form = this.formBuilder.group({
      titlecase: [null, Validators.required],
      firstname: [null, [Validators.required, Validators.minLength(10)]],
      lastname: [null, [Validators.required, Validators.minLength(10)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      dob: [null, [Validators.required]],

    });

  }

  createForm() {
    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)]],
      'name': [null, Validators.required],
      'password': [null, [Validators.required]],
      'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      'validate': ''
    });
  }

  saveDetails(form: any) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }

}
