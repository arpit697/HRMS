import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCoursePopupComponent } from './register-course-popup.component';

describe('RegisterCoursePopupComponent', () => {
  let component: RegisterCoursePopupComponent;
  let fixture: ComponentFixture<RegisterCoursePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCoursePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCoursePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
