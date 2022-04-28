import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.css']
})
export class BuyProductComponent implements OnInit {

  prodName: string = "";
  unitPrice: number = 0;
  qty: number = 0;
  amount: number = 0;
  color: string = "";

  public getTotal() {
    this.amount = this.unitPrice*this.qty;

    if(this.amount>=10000){
      this.color = "green";
    } else {
      this.color = "blue";
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
