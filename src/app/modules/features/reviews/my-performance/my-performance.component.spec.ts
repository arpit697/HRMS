import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPerformanceComponent } from './my-performance.component';

describe('MyPerformanceComponent', () => {
  let component: MyPerformanceComponent;
  let fixture: ComponentFixture<MyPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPerformanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
