import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterleftComponent } from './filterleft.component';

describe('FilterleftComponent', () => {
  let component: FilterleftComponent;
  let fixture: ComponentFixture<FilterleftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterleftComponent]
    });
    fixture = TestBed.createComponent(FilterleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
