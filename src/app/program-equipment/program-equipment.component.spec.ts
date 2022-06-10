import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramEquipmentComponent } from './program-equipment.component';

describe('ProgramEquipmentComponent', () => {
  let component: ProgramEquipmentComponent;
  let fixture: ComponentFixture<ProgramEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
