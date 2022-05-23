import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Otdel} from "../classes";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../api";

@Component({
  selector: 'app-select-otdel',
  templateUrl: './select-otdel.component.html',
  styleUrls: ['./select-otdel.component.css']
})
export class SelectOtdelComponent implements OnInit {

  @Output() Change = new EventEmitter<number>();
  @Input()  ot: Otdel| undefined;
  myControl = new FormControl();
  otdel: Otdel[] = [];
  filteredOptions: Observable<Otdel[]> | undefined;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.findAllOtdels().subscribe(data =>
    {
      this.otdel = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(val => val ? this._filter(val) : this.otdel.slice()));
      if(this.ot){
        this.selectCategory();
      }
    });

  }
  private _filter(value: Otdel): Otdel[] {
    const filterValue = value?.name.toLowerCase();

    return this.otdel.filter(option => option?.name.toLowerCase().includes(filterValue));
  }

  displayFn(category: Otdel): string {
    return category && category.name ? category.name : '';
  }

  selectCategory(){
    for( let cat of this.otdel){
      if( cat.id === this.ot?.id ){
        this.myControl.setValue(cat);
      }
    }

  }
}
