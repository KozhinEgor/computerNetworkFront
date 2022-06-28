import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompComponent } from './add-comp.component';
import {AddComponentComponent} from "../../add-component/add-component.component";

describe('AddComponentComponent', () => {
  let component: AddComponentComponent;
  let fixture: ComponentFixture<AddComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
