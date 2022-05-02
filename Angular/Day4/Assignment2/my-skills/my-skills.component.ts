import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.css']
})
export class MySkillsComponent implements OnInit {

   mySkills = ["Java", "React JS", "Angular 13", "Spring Boot", "Hibernate" ] 

  constructor() { }

  ngOnInit(): void {
  }

}
