import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details-cardformat',
  templateUrl: './product-details-cardformat.component.html',
  styleUrls: ['./product-details-cardformat.component.css']
})
export class ProductDetailsCardformatComponent implements OnInit {

  deptsArray:Product[] = [
    {pid : 1, pname : "TV",  category :  "Electronics", price:15000, qty:1} ,
    {pid : 2, pname : "Charger",  category :  "Gadget" , price:10000, qty:2},
    {pid : 3, pname : "Mobile",  category :  "Electronics" , price:20000, qty:1},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
