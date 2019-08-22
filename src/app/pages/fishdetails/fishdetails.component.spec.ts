import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishdetailsComponent } from './fishdetails.component';

describe('FishdetailsComponent', () => {
  let component: FishdetailsComponent;
  let fixture: ComponentFixture<FishdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
