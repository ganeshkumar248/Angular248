import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  displayMode: string = "Table";

  productArray: Product[] = [
    { id: 101, name: "Redmi", price: 25000, category: "Mobile", qty: 1, picture: "assets/images/phone-image.png" },
    { id: 102, name: "LG", price: 15000, category: "Mobile", qty: 2, picture: "assets/images/phone-image.png" },
    { id: 103, name: "Samsung", price: 35000, category: "Mobile", qty: 3, picture: "assets/images/phone-image.png" },
    { id: 104, name: "Poco", price: 17500, category: "Mobile", qty: 4, picture: "assets/images/phone-image.png" },
    { id: 201, name: "Dell", price: 55000, category: "Laptop", qty: 1, picture: "assets/images/laptop-image.png" },
    { id: 202, name: "Lenovo", price: 65500, category: "Laptop", qty: 2, picture: "assets/images/laptop-image.png" },
    { id: 203, name: "HP", price: 76500, category: "Laptop", qty: 3, picture: "assets/images/laptop-image.png" },
    { id: 104, name: "Asus", price: 35000, category: "Laptop", qty: 4, picture: "assets/images/laptop-image.png" },
    { id: 301, name: "Canon", price: 8500, category: "Camera", qty: 1, picture: "assets/images/camera-image.png" },
    { id: 302, name: "Sony", price: 5000, category: "Camera", qty: 2, picture: "assets/images/camera-image.png" },
    { id: 303, name: "Nikon", price: 9000, category: "Camera", qty: 3, picture: "assets/images/camera-image.png" },
    { id: 304, name: "Samsung", price: 3500, category: "Camera", qty: 4, picture: "assets/images/camera-image.png" },
  ]

  values: any[] = [
   { 'value': 'Table', 'img': '../../assets/images/table-image.png' },
  { 'value': 'List', 'img': '../../assets/images/list-image.png' },
  { 'value': 'largeImage', 'img': '../../assets/images/large.png' },
  { 'value': 'smallImage', 'img': '../../assets/images/small.png' },

  ]


  ngOnInit(): void {
  }
  changeOption(val: string) {
    this.displayMode = val;
  }



  // set_displayMode_List() {
  //   this.displayMode = "List";
  // }

  // set_displayMode_Table() {
  //   this.displayMode = "Table";
  // }

  // set_displayMode_small() {
  //   this.displayMode = "smallImage";
  // }

  // set_displayMode_large() {
  //   this.displayMode = "largeImage";
  // }

}
