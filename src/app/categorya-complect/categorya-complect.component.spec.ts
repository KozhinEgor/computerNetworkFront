import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryaComplectComponent } from './categorya-complect.component';

describe('CategoryaComplectComponent', () => {
  let component: CategoryaComplectComponent;
  let fixture: ComponentFixture<CategoryaComplectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryaComplectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryaComplectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
