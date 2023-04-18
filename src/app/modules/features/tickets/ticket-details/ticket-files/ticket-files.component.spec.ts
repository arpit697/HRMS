import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFilesComponent } from './ticket-files.component';

describe('TicketFilesComponent', () => {
  let component: TicketFilesComponent;
  let fixture: ComponentFixture<TicketFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
