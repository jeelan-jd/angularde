import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterrightComponent } from './filterright.component';

describe('FilterrightComponent', () => {
  let component: FilterrightComponent;
  let fixture: ComponentFixture<FilterrightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterrightComponent]
    });
    fixture = TestBed.createComponent(FilterrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
