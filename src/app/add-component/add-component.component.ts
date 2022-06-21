import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api";
import {ErrorComponent} from "../error/error.component";

import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-add-component',
  templateUrl: './add-component.component.html',
  styleUrls: ['./add-component.component.css']
})
export class AddComponentComponent implements OnInit {

  name:string= '';
  constructor(private api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  save(){
    if(this.name !=''){
      this.api.createComponent(this.name).subscribe(data =>{
        this.dialog.open(ErrorComponent,{data:{text:'Сохранил'}});
      })
    }
    else{
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
  }

}
