import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuButtonComponent } from './ru-button.component';

describe('RuButtonComponent', () => {
  let component: RuButtonComponent;
  let fixture: ComponentFixture<RuButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
