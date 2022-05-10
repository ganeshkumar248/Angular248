import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList = [
    {id: 1, name: "Mobile"},
    {id: 2, name: "Laptop"},
    {id: 3, name: "Camera"}
  ];

  productArray = [
    { id: 101, name: "Redmi", price: 25000, category: "Mobile"},
    { id: 102, name: "LG", price: 15000, category: "Mobile"},
    { id: 103, name: "Samsung", price: 35000, category: "Mobile"},
    { id: 201, name: "Dell", price: 55000, category: "Laptop"},
    { id: 202, name: "Lenovo", price: 65500, category: "Laptop"},
    { id: 203, name: "HP", price: 76500, category: "Laptop"},
    { id: 301, name: "Canon", price: 8500, category: "Camera"},
    { id: 302, name: "Sony", price: 5000, category: "Camera"},
    { id: 303, name: "Nikon", price: 9000, category: "Camera"},
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
