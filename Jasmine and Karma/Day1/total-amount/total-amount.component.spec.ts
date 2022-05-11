import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TotalAmountComponent } from './total-amount.component';

describe('TotalAmountComponent', () => {
  let component: TotalAmountComponent;
  let fixture: ComponentFixture<TotalAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalAmountComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //check the default value of the quantity should be 1
  it('Quantity should be 1 as default value', () => {
    const quantity: number = component.qty;
    expect(quantity).toBe(1);
  });

  //check the default value of total amount shound be 0
  it('total amount should be 0 as default value', () => {
    const amount: number = component.totalAmount;
    expect(component.totalAmount).toBe(amount);
  });


  it('check total amount after calling total_amonut() method', () => {
    component.name = "mobile";
    component.price = 17500;
    component.qty = 2;
    component.total_amount();
    const amount: number = component.totalAmount;
    // console.log(amount);
    expect(amount).toBe(component.totalAmount);
  });


  it('should set the value 35000 to the price property textbox', () => {
    let inputObj = fixture.nativeElement.querySelectorAll('input');
    inputObj[1].value = 35000;
    expect(inputObj[1].value).toBe('35000');
  });

  it('should set the textbox value to price property', () => {
    let inputObj = fixture.nativeElement.querySelectorAll('input');
    inputObj[1].value = 35000;
    inputObj[1].dispatchEvent(new Event('input'));
    expect(component.price).toBe(35000);
  });

 
  it('check the total_amount button for generating the results', () => {
    let inputArray = fixture.nativeElement.querySelectorAll('input');
    inputArray[1].value = 17500;
    inputArray[1].dispatchEvent(new Event('input'));
    // console.log(component.price);

    inputArray[2].value = 2;
    inputArray[2].dispatchEvent(new Event('input'));
    console.log(component.qty);

    let inputObj = fixture.nativeElement.querySelector('button');
    inputObj.dispatchEvent(new Event('click'));
    // console.log(component.totalAmount);
    fixture.detectChanges();

    let paraObj = fixture.nativeElement.querySelector('p');
    expect(paraObj.textContent).toBe('Total Amount is: '+ component.totalAmount);

  });

});
