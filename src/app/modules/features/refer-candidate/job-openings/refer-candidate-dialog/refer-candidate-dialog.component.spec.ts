import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferCandidateDialogComponent } from './refer-candidate-dialog.component';

describe('ReferCandidateDialogComponent', () => {
  let component: ReferCandidateDialogComponent;
  let fixture: ComponentFixture<ReferCandidateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferCandidateDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferCandidateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
