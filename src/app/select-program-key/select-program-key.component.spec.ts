import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProgramKeyComponent } from './select-program-key.component';

describe('SelectProgramKeyComponent', () => {
  let component: SelectProgramKeyComponent;
  let fixture: ComponentFixture<SelectProgramKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectProgramKeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProgramKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
