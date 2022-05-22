import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditEquipmentComponent } from './popup-edit-equipment.component';

describe('PopupEditEquipmentComponent', () => {
  let component: PopupEditEquipmentComponent;
  let fixture: ComponentFixture<PopupEditEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
