import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedFishDetailsComponent } from './deleted-fish-details.component';

describe('DeletedFishDetailsComponent', () => {
  let component: DeletedFishDetailsComponent;
  let fixture: ComponentFixture<DeletedFishDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedFishDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedFishDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
