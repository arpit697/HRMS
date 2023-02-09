import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialLoginComponent } from './credential-login.component';

describe('CredentialLoginComponent', () => {
  let component: CredentialLoginComponent;
  let fixture: ComponentFixture<CredentialLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CredentialLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CredentialLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
