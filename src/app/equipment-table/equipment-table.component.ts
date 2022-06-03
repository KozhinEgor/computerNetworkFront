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
  displayedColumns = ['id','name','otdel', 'user', 'categoryEquipment', 'edit', 'delete'];
  @Input() otdel: Otdel = {id:0,name:''};
  @Input() dataSource = new MatTableDataSource<Equipment>();
  constructor(public dialog: MatDialog,private api:ApiService) { }

  ngOnInit(): void {
  }
  update()
  openEdit(eq:Equipment){
    this.dialog.open(PopupEditEquipmentComponent, {width: '80%',
      height: '90%',data: eq})
  }
  delete(eq:Equipment){
    this.dialog.open(DialogSelectComponent,{data:{text:'Вы хотите разобрать оборудование'}}).afterClosed().subscribe(data=>{
      if(data){
        this.api.deleteEquipment(eq).subscribe(data => {
          this.dataSource = new MatTableDataSource<Equipment>(data)
        })
      }
    })
  }
}
