import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressResourcesComponent } from './inprogress-resources.component';

describe('InprogressResourcesComponent', () => {
  let component: InprogressResourcesComponent;
  let fixture: ComponentFixture<InprogressResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InprogressResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
