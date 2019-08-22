import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLocalKoiViewComponent } from './customer-local-koi-view.component';

describe('CustomerLocalKoiViewComponent', () => {
  let component: CustomerLocalKoiViewComponent;
  let fixture: ComponentFixture<CustomerLocalKoiViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerLocalKoiViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLocalKoiViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
