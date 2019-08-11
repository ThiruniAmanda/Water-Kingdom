import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLocalkoiComponent } from './customer-localkoi.component';

describe('CustomerLocalkoiComponent', () => {
  let component: CustomerLocalkoiComponent;
  let fixture: ComponentFixture<CustomerLocalkoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLocalkoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLocalkoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
