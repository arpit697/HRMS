import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralBonusComponent } from './referral-bonus.component';

describe('ReferralBonusComponent', () => {
  let component: ReferralBonusComponent;
  let fixture: ComponentFixture<ReferralBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralBonusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
