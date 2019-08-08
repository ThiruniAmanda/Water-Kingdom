import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerImportedkoiComponent } from './customer-importedkoi.component';

describe('CustomerImportedkoiComponent', () => {
  let component: CustomerImportedkoiComponent;
  let fixture: ComponentFixture<CustomerImportedkoiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerImportedkoiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerImportedkoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
