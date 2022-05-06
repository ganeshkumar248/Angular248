import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-forms',
  templateUrl: './model-forms.component.html',
  styleUrls: ['./model-forms.component.css']
})
export class ModelFormsComponent implements OnInit {

  vehicleForm:FormGroup = new FormGroup({
    ownerName : new FormControl("", Validators.required),
    contactNumber : new FormControl("", [Validators.required, Validators.pattern("\\d{10}")]),
    ownerEmail : new FormControl("", [Validators.required, Validators.email]),
    vehicleRegNumber : new FormControl("", [Validators.required, Validators.pattern("^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$")]),
    address : new FormControl("", Validators.required),
    model : new FormControl("", Validators.minLength(10)),
    color : new FormControl("", Validators.required),
    year : new FormControl("", [Validators.required, Validators.min(2012), Validators.max(2022)])
  });

 constructor() { }

 ngOnInit(): void {
 }



 public submit_click():void
 {
     // ajax call to send data to server
     alert("Customer Details are registered.");
     let customerObj = this.vehicleForm.value;
     console.log(customerObj);
 }

}
