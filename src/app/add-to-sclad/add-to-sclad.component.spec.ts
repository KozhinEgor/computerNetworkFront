import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToScladComponent } from './add-to-sclad.component';

describe('AddToScladComponent', () => {
  let component: AddToScladComponent;
  let fixture: ComponentFixture<AddToScladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToScladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToScladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
