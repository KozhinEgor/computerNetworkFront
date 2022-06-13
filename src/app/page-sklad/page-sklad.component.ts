import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Components, Sklad} from "../classes";
import {ApiService} from "../api";
import {DialogSelectComponent} from "../dialog-select/dialog-select.component";
import {ErrorComponent} from "../error/error.component";

@Component({
  selector: 'app-page-sklad',
  templateUrl: './page-sklad.component.html',
  styleUrls: ['./page-sklad.component.css']
})
export class PageSkladComponent implements OnInit {
  components:Sklad[] = [];
  selectComp:Sklad = {
    id:0,
    component:null,
    number:0
  }
  // id, name? characteristick, categoryComponent, vendor
  constructor(private api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.api.findFreeComponent().subscribe(data =>{
      this.components = data;
    })
  }
  selectedComp(c:Sklad){
    this.selectComp = c;
}
save(){
  this.dialog.open(DialogSelectComponent,{data:{text:'Вы хотите изменить количество?'}}).afterClosed().subscribe(data =>{
    if(data){
      this.api.updateSklad(this.selectComp).subscribe(data =>{
        this.components = data;
      });
      }
  })
  }
delete(){
    this.selectComp.number = null;
  this.dialog.open(DialogSelectComponent,{data:{text:'Вы хотите изменить списать компоненты?'}}).afterClosed().subscribe(data =>{
    if(data){
      this.api.updateSklad(this.selectComp).subscribe(data =>{
        this.components = data;
      });
    }
  })
}
}
