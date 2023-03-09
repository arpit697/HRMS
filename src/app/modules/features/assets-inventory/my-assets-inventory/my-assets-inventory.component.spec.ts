import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAssetsInventoryComponent } from './my-assets-inventory.component';

describe('MyAssetsInventoryComponent', () => {
  let component: MyAssetsInventoryComponent;
  let fixture: ComponentFixture<MyAssetsInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAssetsInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyAssetsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
