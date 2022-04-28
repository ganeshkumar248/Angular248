import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  sid: number = 0;
  sname: string = "";
  sdept: string = "";
  sloc: string = "";

  studentArray: Student[] = [
    { sid: 241, sname: "Sai", sdept: "Civil", sloc: "Elupuru" },
    { sid: 248, sname: "Ganesh", sdept: "EEE", sloc: "Mannarpolur" },
    { sid: 261, sname: "Pavan", sdept: "Mech", sloc: "Athmakuru" },
    { sid: 267, sname: "Rakesh", sdept: "ECE", sloc: "Alluru" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  add_student() {
    let studentObj: Student = new Student();
    studentObj.sid = this.sid;
    studentObj.sname = this.sname;
    studentObj.sdept = this.sdept;
    studentObj.sloc = this.sloc;
    this.studentArray.push(studentObj);
    this.handleClear();
  }

  select_student(sid: number) {
    let studentObj: any = this.studentArray.find(student => student.sid == sid);
    this.sid = studentObj.sid;
    this.sname = studentObj.sname;
    this.sdept = studentObj.sdept;
    this.sloc = studentObj.sloc;
  }

  delete_student(sid: number) {
    // alert("Do you want to delete?")
    if (confirm('Do you really want to delete?')) {
      let index = this.studentArray.findIndex(student => student.sid == sid);
      this.studentArray.splice(index, 1);
    }
  }

  update_student(sid: number) {
    let studentObj: any = this.studentArray.find(student => student.sid == sid);
    studentObj.sname = this.sname;
    studentObj.sdept = this.sdept;
    studentObj.sloc = this.sloc;
    this.handleClear();
  }

  handleClear() {
    this.sid = 0;
    this.sname = "";
    this.sdept = "";
    this.sloc = ";";
  }
}
