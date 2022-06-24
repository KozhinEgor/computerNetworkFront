import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Components, Sklad} from "../classes";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../api";

@Component({
  selector: 'app-select-component',
  templateUrl: './select-component.component.html',
  styleUrls: ['./select-component.component.css']
})
export class SelectComponentComponent implements OnInit {

  @Output() Change = new EventEmitter<number>();
  myControl = new FormControl();
  components: Sklad[] = [];
  filteredOptions: Observable<Sklad[]> | undefined;
  @Output() flag:boolean = true;
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
 this.update();

  }

  update(){
    this.api.findFreeComponent().subscribe(data =>
    {
      this.components = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.component.name),
        map(val => val ? this._filter(val) : this.components.slice()));
    });
  }
  private _filter(value: string): Sklad[] {
    const filterValue = value.toLowerCase();

    return this.components.filter(option => option.component.name.toLowerCase().includes(filterValue));
  }

  displayFn(category: Sklad): string {
    return category && category.component.name ? category.component.name : '';
  }

}
