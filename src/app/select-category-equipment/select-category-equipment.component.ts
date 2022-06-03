import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {CategoryEquipment} from "../classes";
import {ApiService} from "../api";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-select-category-equipment',
  templateUrl: './select-category-equipment.component.html',
  styleUrls: ['./select-category-equipment.component.css']
})
export class SelectCategoryEquipmentComponent implements OnInit {
  @Output() Change = new EventEmitter<number>();
  @Input()  categ: CategoryEquipment| undefined;
  myControl = new FormControl();
  categoryEquipment: CategoryEquipment[] = [];
  filteredOptions: Observable<CategoryEquipment[]> | undefined;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.findAllCategoryEquipment().subscribe(data =>
    {
      this.categoryEquipment = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(val => val ? this._filter(val) : this.categoryEquipment.slice()));
      if(this.categ){
        this.selectCategory();
      }
    });

  }
  private _filter(value: string): CategoryEquipment[] {
    const filterValue = value.toLowerCase();

    return this.categoryEquipment.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(category: CategoryEquipment): string {
    return category && category.name ? category.name : '';
  }

  selectCategory(){
      for( let cat of this.categoryEquipment){
        if( cat.id === this.categ?.id ){
          this.myControl.setValue(cat);
        }
      }

  }
}
