import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { DeptsComponent } from './depts.component';

describe('DeptsComponent', () => {
  let component: DeptsComponent;
  let fixture: ComponentFixture<DeptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render child component elements --> dept-details', () => {
    const childComponent = fixture.debugElement.query(By.css('app-dept-details')); 
    expect(childComponent).toBeTruthy();
  });

  it('should render all child component elements --> dept-details', () => {
    const childComponent = fixture.debugElement.queryAll(By.css('app-dept-details'));
    expect(childComponent.length).toBe(component.depts.length);
  });

  it('testing child component data --> dept-details', () => {
    const childComponent = fixture.debugElement.query(By.css('app-dept-details'));
    expect(childComponent.properties["deptObj"]).toEqual(component.depts[0]);
  });

  it('testing child components events --> onDeptRemove()', () => {
    const childComponent = fixture.debugElement.query(By.css('app-dept-details'));
    const dno = childComponent.properties["deptObj"].deptno;
    childComponent.triggerEventHandler('onDeptRemoved', dno);
    let index = component.depts.findIndex((item: any) => item.deptno == dno);
    expect(index).toBe(-1);
  });

});
