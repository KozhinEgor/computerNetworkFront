import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Components, ProgramKey} from "../classes";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../api";

@Component({
  selector: 'app-select-program-key',
  templateUrl: './select-program-key.component.html',
  styleUrls: ['./select-program-key.component.css']
})
export class SelectProgramKeyComponent implements OnInit {

  @Output() Change = new EventEmitter<number>();
  myControl = new FormControl();
  programKeys: ProgramKey[] = [];
  filteredOptions: Observable<ProgramKey[]> | undefined;
  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
   this.update();

  }
  update(){
    this.api.findFreeProgramKeys().subscribe(data =>
    {
      this.programKeys = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(val => val ? this._filter(val) : this.programKeys.slice()));
    });
  }
  private _filter(value: string): ProgramKey[] {
    const filterValue = value.toLowerCase();

    return this.programKeys.filter(option => option.program.name.toLowerCase().includes(filterValue));
  }

  displayFn(programKey: ProgramKey): string {
    return programKey && programKey.program.name ? programKey.program.name : '';
  }

}
