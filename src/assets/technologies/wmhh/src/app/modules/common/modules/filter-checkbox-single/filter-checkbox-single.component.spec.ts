import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCheckboxSingleComponent } from './filter-checkbox-single.component';

describe('FilterCheckboxSingleComponent', () => {
  let component: FilterCheckboxSingleComponent;
  let fixture: ComponentFixture<FilterCheckboxSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCheckboxSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCheckboxSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
