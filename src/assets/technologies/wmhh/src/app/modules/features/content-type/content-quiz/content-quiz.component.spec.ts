import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentQuizComponent } from './content-quiz.component';

describe('ContentQuizComponent', () => {
  let component: ContentQuizComponent;
  let fixture: ComponentFixture<ContentQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
