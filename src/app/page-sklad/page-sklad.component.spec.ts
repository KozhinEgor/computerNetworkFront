import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSkladComponent } from './page-sklad.component';

describe('PageSkladComponent', () => {
  let component: PageSkladComponent;
  let fixture: ComponentFixture<PageSkladComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageSkladComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSkladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
