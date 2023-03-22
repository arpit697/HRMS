import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsrReportComponent } from './dsr-report.component';

describe('DsrReportComponent', () => {
  let component: DsrReportComponent;
  let fixture: ComponentFixture<DsrReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DsrReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
