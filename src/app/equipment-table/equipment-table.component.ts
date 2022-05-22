import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Equipment, User} from "../classes";
import {MatDialog} from "@angular/material/dialog";
import {PopupEditEquipmentComponent} from "./popup-edit-equipment/popup-edit-equipment.component";

@Component({
  selector: 'app-equipment-table',
  templateUrl: './equipment-table.component.html',
  styleUrls: ['./equipment-table.component.css']
})
export class EquipmentTableComponent implements OnInit {
  displayedColumns = ['id','name','otdel', 'user', 'categoryEquipment', 'edit'];
  @Input() dataSource = new MatTableDataSource<Equipment>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openEdit(eq:Equipment){
    this.dialog.open(PopupEditEquipmentComponent, {width: '80%',
      height: '90%',data: eq})
  }
}
