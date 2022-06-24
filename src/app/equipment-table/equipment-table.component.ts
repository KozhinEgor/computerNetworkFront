import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Equipment, Otdel, User} from "../classes";
import {MatDialog} from "@angular/material/dialog";
import {PopupEditEquipmentComponent} from "./popup-edit-equipment/popup-edit-equipment.component";
import {DialogSelectComponent} from "../dialog-select/dialog-select.component";
import {ApiService} from "../api";

@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css']
})
export class EquipmentTableComponent implements OnInit {
  displayedColumns = ['id','name','otdel', 'user', 'categoryEquipment', 'edit'];
  otdel: Otdel = {id:0,name:''};
   dataSource = new MatTableDataSource<Equipment>();
  constructor(public dialog: MatDialog,private api:ApiService) { }

  ngOnInit(): void {
  }
  update(otdel:Otdel){
    this.otdel = otdel;
    this.api.findEquipmentByOtdel(this.otdel).subscribe(data => {
      this.dataSource = new MatTableDataSource<Equipment>(data);
    });
  }
  openEdit(eq:Equipment){
    this.dialog.open(PopupEditEquipmentComponent, {width: '80%',
      height: '90%',data: eq}).afterClosed().subscribe(data => {this.update(this.otdel)})
  }

  addEquipment(){
    this.api.createEquipment(this.otdel).subscribe( data => {
     this.update(this.otdel);
    });
  }
}
