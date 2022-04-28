import { Component, OnInit } from '@angular/core';
import { Dept } from '../models/dept';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrls: ['./dept-details.component.css']
})
export class DeptDetailsComponent implements OnInit {

  deptno: number = 0;
  dname: string = "";
  loc: string = "";

  deptsArray: Dept[] = [
    { deptno: 10, dname: "Accounts", loc: "Hyd" },
    { deptno: 20, dname: "Sales", loc: "Pune" },
    { deptno: 30, dname: "Marketing", loc: "Hyd" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  addDept_click() {
    let deptObj: Dept = new Dept();
    deptObj.deptno = this.deptno;
    deptObj.dname = this.dname;
    deptObj.loc = this.loc;

    this.deptsArray.push(deptObj);
    this.handleClear();
  }

  delete_click(dno: number) {
    // alert("Do you want to delete?")
    if(confirm('Do you want to delete?')) {
      let index = this.deptsArray.findIndex(dept => dept.deptno == dno);
      this.deptsArray.splice(index, 1);
    }

  }

  select_click(dno: number) {
    let deptObj: any = this.deptsArray.find(dept => dept.deptno == dno);
    this.deptno = deptObj.deptno;
    this.dname = deptObj.dname;
    this.loc = deptObj.loc;
  }

  update_click(dno: number) {
    let deptObj: any = this.deptsArray.find(dept => dept.deptno == dno);
    deptObj.dname = this.dname;
    deptObj.loc = this.loc;
    this.handleClear();
  }

  handleClear() {
    this.deptno =0;
    this.dname="";
    this.loc ="";
  }
}

