import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CategoryComponent, CategoryEquipment} from "../classes";
import {ApiService} from "../api";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-categorya-complect',
  templateUrl: './categorya-complect.component.html',
  styleUrls: ['./categorya-complect.component.css']
})
export class CategoryaComplectComponent implements OnInit {
  @Output() Change = new EventEmitter<number>();
  @Input()  categ: CategoryComponent;
  myControl = new FormControl();
  categoryEquipment: CategoryComponent[] = [];
  filteredOptions: Observable<CategoryComponent[]> | undefined;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.findAllCategoryComponent().subscribe(data =>
    {
      this.categoryEquipment = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(val => val ? this._filter(val) : this.categoryEquipment.slice()));
      if(this.categ){
        this.selectCategory(this.categ);
      }
    });

  }
  private _filter(value: string): CategoryComponent[] {
    const filterValue = value.toLowerCase();

    return this.categoryEquipment.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(category: CategoryComponent): string {
    return category && category.name ? category.name : '';
  }

  selectCategory(categ:CategoryComponent){
    for( let cat of this.categoryEquipment){
      if( cat.id === categ.id ){
        this.myControl.setValue(cat);
      }
    }

  }
}
