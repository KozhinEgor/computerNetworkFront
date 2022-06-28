import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramReestrComponent } from './program-reestr.component';

describe('ProgramReestrComponent', () => {
  let component: ProgramReestrComponent;
  let fixture: ComponentFixture<ProgramReestrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramReestrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramReestrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
