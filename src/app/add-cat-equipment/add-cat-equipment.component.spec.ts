import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatEquipmentComponent } from './add-cat-equipment.component';

describe('AddCatEquipmentComponent', () => {
  let component: AddCatEquipmentComponent;
  let fixture: ComponentFixture<AddCatEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCatEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCatEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
