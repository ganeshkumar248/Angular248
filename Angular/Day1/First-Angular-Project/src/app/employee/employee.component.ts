import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  public empId: number = 54654564;
  public empName: string = "Stephen"
  public empJob: string = "Manager"
  public empSal: number = 75000
  public empDepo: number = 10

  listOfNames: string[] = ["Ganesh", "Kumar", "Macherla"];

}
