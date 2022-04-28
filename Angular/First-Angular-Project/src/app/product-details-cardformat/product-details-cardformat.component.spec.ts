import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailsCardformatComponent } from './product-details-cardformat.component';

describe('ProductDetailsCardformatComponent', () => {
  let component: ProductDetailsCardformatComponent;
  let fixture: ComponentFixture<ProductDetailsCardformatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailsCardformatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsCardformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
