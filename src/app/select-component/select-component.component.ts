import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Components} from "../classes";
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
  components: Components[] = [];
  filteredOptions: Observable<Components[]> | undefined;
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.findAllComponent().subscribe(data =>
    {
      this.components = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(val => val ? this._filter(val) : this.components.slice()));
    });

  }
  private _filter(value: string): Components[] {
    const filterValue = value.toLowerCase();

    return this.components.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(category: Components): string {
    return category && category.name ? category.name : '';
  }

}
