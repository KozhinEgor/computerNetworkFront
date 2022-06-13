import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupEditSotrudnickComponent } from './popup-edit-sotrudnick.component';

describe('PopupEditSotrudnickComponent', () => {
  let component: PopupEditSotrudnickComponent;
  let fixture: ComponentFixture<PopupEditSotrudnickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupEditSotrudnickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupEditSotrudnickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
