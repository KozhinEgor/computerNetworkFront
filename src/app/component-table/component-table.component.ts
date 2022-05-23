import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Equipment} from "../classes";
import {MatDialog} from "@angular/material/dialog";
import {PopupEditEquipmentComponent} from "../equipment-table/popup-edit-equipment/popup-edit-equipment.component";

@Component({
  selector: 'app-component-table',
  templateUrl: './component-table.component.html',
  styleUrls: ['./component-table.component.css']
})
export class ComponentTableComponent implements OnInit {

  displayedColumns = ['id', 'vendor','name','category', 'characteristick', 'srock', 'number', 'delete'];
  dataSource = new MatTableDataSource<Equipment>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openEdit(eq:Equipment){
    this.dialog.open(PopupEditEquipmentComponent, {width: '80%',
      height: '90%',data: eq})
  }
}
