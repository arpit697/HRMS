import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsStaticContentComponent } from './cms-static-content.component';

describe('CmsStaticContentComponent', () => {
  let component: CmsStaticContentComponent;
  let fixture: ComponentFixture<CmsStaticContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsStaticContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsStaticContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
