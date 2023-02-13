import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuJobCardComponent } from './ru-job-card.component';

describe('RuJobCardComponent', () => {
  let component: RuJobCardComponent;
  let fixture: ComponentFixture<RuJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuJobCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
