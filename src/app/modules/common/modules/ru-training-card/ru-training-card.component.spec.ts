import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuTrainingCardComponent } from './ru-training-card.component';

describe('RuTrainingCardComponent', () => {
  let component: RuTrainingCardComponent;
  let fixture: ComponentFixture<RuTrainingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuTrainingCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuTrainingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
