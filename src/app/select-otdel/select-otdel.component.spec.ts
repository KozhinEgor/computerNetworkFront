import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOtdelComponent } from './select-otdel.component';

describe('SelectOtdelComponent', () => {
  let component: SelectOtdelComponent;
  let fixture: ComponentFixture<SelectOtdelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOtdelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOtdelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
