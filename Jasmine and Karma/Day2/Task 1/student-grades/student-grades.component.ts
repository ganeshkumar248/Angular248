import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student-grades';

@Component({
  selector: 'app-student-grades',
  templateUrl: './student-grades.component.html',
  styleUrls: ['./student-grades.component.css']
})
export class StudentGradesComponent implements OnInit {

  studentGradesArray: Student[] = [
    {sid: 1, sname: "Scott", sgrade: 1},
    {sid: 2, sname: "Abrons", sgrade: 4},
    {sid: 3, sname: "Smith", sgrade: 3},
    {sid: 4, sname: "James", sgrade: 2},
    {sid: 5, sname: "Adam", sgrade: 3},
    {sid: 6, sname: "Sathya", sgrade: 1},
    {sid: 7, sname: "Maneesh", sgrade: 4}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
