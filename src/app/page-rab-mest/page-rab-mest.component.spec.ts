import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRabMestComponent } from './page-rab-mest.component';

describe('PageRabMestComponent', () => {
  let component: PageRabMestComponent;
  let fixture: ComponentFixture<PageRabMestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageRabMestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRabMestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
