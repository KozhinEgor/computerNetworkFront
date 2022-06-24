import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api";
import {ErrorComponent} from "../error/error.component";

import {MatDialog} from "@angular/material/dialog";
@Component({
  selector: 'app-add-cat-equipment',
  templateUrl: './add-cat-equipment.component.html',
  styleUrls: ['./add-cat-equipment.component.css']
})
export class AddCatEquipmentComponent implements OnInit {


  name:string= '';
  constructor(private api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  save(){
    if(this.name !=''){
      this.api.createCatEq(this.name).subscribe(data =>{
        this.dialog.open(ErrorComponent,{data:{text:'Сохранил'}});
      })
    }
    else{
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
  }

}
