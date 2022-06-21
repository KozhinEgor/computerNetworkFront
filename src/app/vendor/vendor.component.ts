import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Vendor, CategoryEquipment} from "../classes";
import {ApiService} from "../api";
import {map, Observable, startWith} from "rxjs";

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  @Output() Change = new EventEmitter<number>();
  @Input()  categ: Vendor;
  myControl = new FormControl();
  categoryEquipment: Vendor[] = [];
  filteredOptions: Observable<Vendor[]> | undefined;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {

this.update();
  }
  update(){
    this.api.findAllVendor().subscribe(data =>
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
  private _filter(value: string): Vendor[] {
    const filterValue = value.toLowerCase();

    return this.categoryEquipment.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(category: Vendor): string {
    return category && category.name ? category.name : '';
  }

  selectCategory(categ:Vendor){
    for( let cat of this.categoryEquipment){
      if( cat.id === categ.id ){
        this.myControl.setValue(cat);
      }
    }

  }
}
