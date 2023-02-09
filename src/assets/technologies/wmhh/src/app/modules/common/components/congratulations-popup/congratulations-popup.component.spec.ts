import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongratulationsPopupComponent } from './congratulations-popup.component';

describe('CongratulationsPopupComponent', () => {
  let component: CongratulationsPopupComponent;
  let fixture: ComponentFixture<CongratulationsPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CongratulationsPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CongratulationsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
