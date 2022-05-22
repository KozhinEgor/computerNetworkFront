import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCategoryEquipmentComponent } from './select-category-equipment.component';

describe('SelectCategoryEquipmentComponent', () => {
  let component: SelectCategoryEquipmentComponent;
  let fixture: ComponentFixture<SelectCategoryEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCategoryEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCategoryEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
