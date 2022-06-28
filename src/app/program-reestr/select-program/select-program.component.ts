import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Program, Vendor} from "../../classes";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../../api";

@Component({
  selector: 'app-select-program',
  templateUrl: './select-program.component.html',
  styleUrls: ['./select-program.component.css']
})
export class SelectProgramComponent implements OnInit {
  @Input()  categ: Program;
  myControl = new FormControl();
  programs: Program[] = [];
  filteredOptions: Observable<Program[]> | undefined;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {

    this.update();
  }
  update(){
    this.api.findPrograms().subscribe(data =>
    {
      this.programs = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(val => val ? this._filter(val) : this.programs.slice()));
      if(this.categ){
        this.selectProgram(this.categ);
      }
    });
  }
  private _filter(value: string): Program[] {
    const filterValue = value.toLowerCase();

    return this.programs.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  displayFn(category: Program): string {
    return category && category.name ? category.name : '';
  }

  selectProgram(categ:Program){
    for( let cat of this.programs){
      if( cat.id === categ.id ){
        this.myControl.setValue(cat);
      }
    }

  }
}
