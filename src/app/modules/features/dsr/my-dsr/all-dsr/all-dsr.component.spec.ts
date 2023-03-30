import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDsrComponent } from './all-dsr.component';

describe('AllDsrComponent', () => {
  let component: AllDsrComponent;
  let fixture: ComponentFixture<AllDsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDsrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
