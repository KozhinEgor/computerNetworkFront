import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProgComponent } from './create-prog.component';

describe('CreateProgramComponent', () => {
  let component: CreateProgComponent;
  let fixture: ComponentFixture<CreateProgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
