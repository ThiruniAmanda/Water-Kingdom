import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOurkoiComponent } from './customer-ourkoi.component';

describe('CustomerOurkoiComponent', () => {
  let component: CustomerOurkoiComponent;
  let fixture: ComponentFixture<CustomerOurkoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerOurkoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOurkoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
