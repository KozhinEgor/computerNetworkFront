import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Components, Equipment, Sklad} from "../classes";
import {ApiService} from "../api";
import {DialogSelectComponent} from "../dialog-select/dialog-select.component";
import {ErrorComponent} from "../error/error.component";
import {PopupEditEquipmentComponent} from "../equipment-table/popup-edit-equipment/popup-edit-equipment.component";
import {MatTableDataSource} from "@angular/material/table";
import {AddCompComponent} from "./add-component/add-comp.component";

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
    this.update();
  }
  selectedComp(c:Sklad){
    this.selectComp = c;
}
update(){
  this.api.findFreeComponent().subscribe(data =>{
    this.components = data;
  })
  this.selectComp = {
    id:0,
    component:null,
    number:0
  }
}
save(){
  this.dialog.open(DialogSelectComponent,{data:{text:'Вы хотите изменить количество?'}}).afterClosed().subscribe(data =>{
    if(data){
      this.api.updateSklad(this.selectComp).subscribe(data =>{
        this.components = data;
      });
      }
    this.update();
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
    this.update();
  })
}
  openEquipment(){
    this.api.createEquipment({id:1,name:''}).subscribe( data => {
      this.dialog.open(PopupEditEquipmentComponent,{width: '80%', height: '90%',data:data}).afterClosed().subscribe(d => {
        this.update();
      })
    });
  }
  addComp(){
    this.dialog.open(AddCompComponent).afterClosed().subscribe(data => {
      if(typeof data !== "string" && data !== null && data != undefined){
        this.api.addToSklad(data).subscribe(data => {
          this.update();
        });
      }
    });
  }
}

