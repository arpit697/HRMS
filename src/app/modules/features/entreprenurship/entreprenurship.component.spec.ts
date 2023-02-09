import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreprenurshipComponent } from './entreprenurship.component';

describe('EntreprenurshipComponent', () => {
  let component: EntreprenurshipComponent;
  let fixture: ComponentFixture<EntreprenurshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntreprenurshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntreprenurshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
