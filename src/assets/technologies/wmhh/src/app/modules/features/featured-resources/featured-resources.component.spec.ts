import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedResourcesComponent } from './featured-resources.component';

describe('FeaturedResourcesComponent', () => {
  let component: FeaturedResourcesComponent;
  let fixture: ComponentFixture<FeaturedResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
