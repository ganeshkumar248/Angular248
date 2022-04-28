import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input()
  category: string = "";
 
  productFilter:Product[]= [];

  productArray: Product[] = [
    {id: 101, name: "Redmi", price: 25000, category: "Mobile", qty: 1},
    {id: 102, name: "LG", price: 15000, category: "Mobile", qty: 2},
    {id: 103, name: "Samsung", price: 35000, category: "Mobile", qty: 3},
    {id: 201, name: "Dell", price: 55000, category: "Laptop", qty: 1},
    {id: 202, name: "Lenovo", price: 65500, category: "Laptop", qty: 2},
    {id: 203, name: "HP", price: 76500, category: "Laptop", qty: 3}
  ]

  constructor() { }

  ngOnInit(): void {
    this.productFilter = this.productArray.filter(product => product.category == this.category); 
  }


}
