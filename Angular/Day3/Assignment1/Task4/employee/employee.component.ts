import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges {

  value1: number = 0;
  value2: number = 0;

  filterValue1: number = 0;
  filterValue2: number = 0;

  employeeArray: Employee[] = [
    { empId: 241, empName: "Sai", empJob: "Tester", empSal: 25000, empDepo: 10 },
    { empId: 248, empName: "Ganesh", empJob: "Developer", empSal: 75000, empDepo: 20 },
    { empId: 250, empName: "Hema", empJob: "Admin", empSal: 47500, empDepo: 30 },
    { empId: 257, empName: "Rupa", empJob: "Hr", empSal: 65000, empDepo: 40 },
    { empId: 261, empName: "Pavan", empJob: "Operations", empSal: 35000, empDepo: 50 },
    { empId: 267, empName: "Rakesh", empJob: "IT", empSal: 57500, empDepo: 60 },
  ]
  ngOnInit(): void {

  }

  ngOnChanges() {

  }

  filterData_click()
    {
      this.value1= this.filterValue1;
      this.value2= this.filterValue2;
    }


}
