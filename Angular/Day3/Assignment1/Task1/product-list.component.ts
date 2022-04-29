import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @Input()
  // category: string = "";
 
  // productFilter:Product[]= [];

  start: number = 0;
  end: number = 4;
  isDisabled: boolean = false;

  productArray: Product[] = [
    {id: 101, name: "Redmi", price: 25000, category: "Mobile", qty: 1},
    {id: 102, name: "LG", price: 15000, category: "Mobile", qty: 2},
    {id: 103, name: "Samsung", price: 35000, category: "Mobile", qty: 3},
    {id: 104, name: "Poco", price: 17500, category: "Mobile", qty: 4},
    {id: 201, name: "Dell", price: 55000, category: "Laptop", qty: 1},
    {id: 202, name: "Lenovo", price: 65500, category: "Laptop", qty: 2},
    {id: 203, name: "HP", price: 76500, category: "Laptop", qty: 3},
    {id: 104, name: "Asus", price: 35000, category: "Laptop", qty: 4},
    {id: 301, name: "Canon", price: 8500, category: "Camera", qty: 1},
    {id: 302, name: "Sony", price: 5000, category: "Camera", qty: 2},
    {id: 303, name: "Nikon", price: 9000, category: "Camera", qty: 3},
    {id: 304, name: "Samsung", price: 3500, category: "Camera", qty: 4},
  ]

  constructor() { }

  ngOnInit(): void {
    // this.productFilter = this.productArray.filter(product => product.category == this.category); 
  }

  loadMore_click(){
    if(this.productArray.length <= this.end) {
      this.isDisabled = true;
    } else {
      this.end = this.end + 4;
    }
  }


}
