import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestJobOpeningsComponent } from './latest-job-openings.component';

describe('LatestJobOpeningsComponent', () => {
  let component: LatestJobOpeningsComponent;
  let fixture: ComponentFixture<LatestJobOpeningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestJobOpeningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestJobOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
