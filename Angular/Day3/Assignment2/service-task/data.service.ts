import { Injectable } from '@angular/core';
import { Employee } from './models/employee';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Employee[] = [
    { empId: 241, empName: "Sai", empJob: "Tester", empSal: 25000, empDepo: 10 },
    { empId: 248, empName: "Ganesh", empJob: "Developer", empSal: 75000, empDepo: 20 },
    { empId: 250, empName: "Hema", empJob: "Admin", empSal: 47500, empDepo: 30 },
    { empId: 257, empName: "Rupa", empJob: "Hr", empSal: 65000, empDepo: 40 },
    { empId: 261, empName: "Pavan", empJob: "Operations", empSal: 35000, empDepo: 50 }
  ]

  constructor() { }

  addEmployee(employee: Employee) {
    this.data.push(employee);
  }

  deleteEmployee(empId: number) {
    this.data.splice(empId, 1);
  }
}
