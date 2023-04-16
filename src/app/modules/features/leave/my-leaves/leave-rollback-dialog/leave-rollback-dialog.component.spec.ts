import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveRollbackDialogComponent } from './leave-rollback-dialog.component';

describe('LeaveRollbackDialogComponent', () => {
  let component: LeaveRollbackDialogComponent;
  let fixture: ComponentFixture<LeaveRollbackDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveRollbackDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveRollbackDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
