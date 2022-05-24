import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ComponentEquipment, Equipment} from "../classes";
import {MatDialog} from "@angular/material/dialog";
import {PopupEditEquipmentComponent} from "../equipment-table/popup-edit-equipment/popup-edit-equipment.component";
import {ApiService} from "../api";

@Component({
  selector: 'app-table-component-equipment',
  templateUrl: './table-component-equipment.component.html',
  styleUrls: ['./table-component-equipment.component.css']
})
export class TableComponentEquipmentComponent implements OnInit {
  displayedColumns = [ 'vendor','name','category', 'characteristick', 'srock', 'number', 'delete'];
  dataSource = new MatTableDataSource<ComponentEquipment>();
  @Input() eq:Equipment | undefined;
  constructor(public api:ApiService) { }

  ngOnInit(): void {
    this.update();
  }
  public update(){
    this.api.findAllByEquipment(this.eq).subscribe( data => {
      this.dataSource = new MatTableDataSource<ComponentEquipment>(data);
    })
  }
  delete(eqCo:ComponentEquipment){
    this.api.deleteComponentEquipment(eqCo).subscribe( data => {
      this.dataSource = new MatTableDataSource<ComponentEquipment>(data);
    })
  }
}
