import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedResourcesComponent } from './completed-resources.component';

describe('CompletedResourcesComponent', () => {
  let component: CompletedResourcesComponent;
  let fixture: ComponentFixture<CompletedResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
