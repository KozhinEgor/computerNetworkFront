import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.css']
})
export class DatapickerComponent implements OnInit {


  @Input() name:string;
  constructor() { }

  ngOnInit(): void {
  }
  date = new FormControl();
}
