import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAboutusComponent } from './customer-aboutus.component';

describe('CustomerAboutusComponent', () => {
  let component: CustomerAboutusComponent;
  let fixture: ComponentFixture<CustomerAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
