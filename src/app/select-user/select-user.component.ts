import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from "../classes";
import {FormControl} from "@angular/forms";
import {map, Observable, startWith} from "rxjs";
import {ApiService} from "../api";

@Component({
  selector: 'app-select-user',
  templateUrl: './select-user.component.html',
  styleUrls: ['./select-user.component.css']
})
export class SelectUserComponent implements OnInit {

  @Output() Change = new EventEmitter<number>();
  @Input()  us: User| undefined;
  myControl = new FormControl();
  user: User[] = [];
  filteredOptions: Observable<User[]> | undefined;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.findUsers().subscribe(data =>
    {
      this.user = data;
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(val => val ? this._filter(val) : this.user.slice()));
      if(this.us){
        this.selectCategory();
      }
    });

  }
  private _filter(value: User): User[] {
    const filterValue = value.fio.toLowerCase();

    return this.user.filter(option => option.fio.toLowerCase().includes(filterValue));
  }

  displayFn(category: User): string {
    return category && category.fio ? category.fio : '';
  }

  selectCategory(){
    for( let cat of this.user){
      if( cat.email === this.us?.email ){
        this.myControl.setValue(cat);
      }
    }

  }
}
