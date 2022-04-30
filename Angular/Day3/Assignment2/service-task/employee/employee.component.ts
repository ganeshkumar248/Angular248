import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges {

  public empId: number = 0;
  public empName: string = ""
  public empJob: string = ""
  public empSal: number = 0
  public empDepo: number = 0

  employeeArray: Employee[] = [];

  constructor(private _dataService: DataService) {

  }
  ngOnInit(): void {
    this.employeeArray = this._dataService.data;
  }

  ngOnChanges() {

  }

  addEmployee_click() {
    let employeeObj: Employee = new Employee();
    employeeObj.empId = this.empId;
    employeeObj.empName = this.empName;
    employeeObj.empJob = this.empJob;
    employeeObj.empSal = this.empSal;
    employeeObj.empDepo = this.empDepo;
    this._dataService.addEmployee(employeeObj);
    this.handleclear();
  }

  delete_employee(eid: number) {
    if(confirm("Dou yoy really want to delete?")) {
      let index = this.employeeArray.findIndex(employee => employee.empId == eid);
      this._dataService.deleteEmployee(index);
    }
  }

  handleclear() {
    this.empId = 0;
    this.empName = "";
    this.empJob = "";
    this.empSal = 0;
    this.empDepo = 0;
  }


}
