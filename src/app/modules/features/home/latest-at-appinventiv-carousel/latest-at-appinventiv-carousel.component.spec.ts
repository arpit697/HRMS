import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAtAppinventivCarouselComponent } from './latest-at-appinventiv-carousel.component';

describe('LatestAtAppinventivCarouselComponent', () => {
  let component: LatestAtAppinventivCarouselComponent;
  let fixture: ComponentFixture<LatestAtAppinventivCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestAtAppinventivCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LatestAtAppinventivCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
