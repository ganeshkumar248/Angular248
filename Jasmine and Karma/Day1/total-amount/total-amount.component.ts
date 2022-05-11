import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-total-amount',
  templateUrl: './total-amount.component.html',
  styleUrls: ['./total-amount.component.css']
})
export class TotalAmountComponent implements OnInit {

  name: string = "LG g8x";
  price: number = 37500;
  qty:number = 1;
  totalAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  total_amount() {
    this.totalAmount = this.price * this.qty;
  }

}
 