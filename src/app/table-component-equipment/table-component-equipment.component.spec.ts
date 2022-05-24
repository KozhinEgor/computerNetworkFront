import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponentEquipmentComponent } from './table-component-equipment.component';

describe('TableComponentEquipmentComponent', () => {
  let component: TableComponentEquipmentComponent;
  let fixture: ComponentFixture<TableComponentEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponentEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponentEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
