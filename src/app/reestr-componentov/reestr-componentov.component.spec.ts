import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReestrComponentovComponent } from './reestr-componentov.component';

describe('ReestrComponentovComponent', () => {
  let component: ReestrComponentovComponent;
  let fixture: ComponentFixture<ReestrComponentovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReestrComponentovComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReestrComponentovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
