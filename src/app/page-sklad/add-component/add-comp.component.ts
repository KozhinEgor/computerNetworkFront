import {Component, Inject, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Components, DialogExportData, Sklad} from "../../classes";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../../api";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  myControl = new FormControl();
  components: Components[] = [];
  filteredOptions: Observable<Components[]> | undefined;
  @Output() flag:boolean = true;
  constructor(private api: ApiService,@Inject(MAT_DIALOG_DATA) public data: string) {
  }

  ngOnInit(): void {
    this.update();

  }

  update(){
    this.api.findComponentNoSklad().subscribe(data =>
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
