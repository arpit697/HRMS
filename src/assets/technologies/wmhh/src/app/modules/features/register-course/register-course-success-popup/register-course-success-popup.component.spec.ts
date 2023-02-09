import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCourseSuccessPopupComponent } from './register-course-success-popup.component';

describe('RegisterCourseSuccessPopupComponent', () => {
  let component: RegisterCourseSuccessPopupComponent;
  let fixture: ComponentFixture<RegisterCourseSuccessPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCourseSuccessPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCourseSuccessPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
