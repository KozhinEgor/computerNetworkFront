import {Component, OnInit, ViewChild} from '@angular/core';
import {ApiService} from "../api";
import {Equipment, Otdel, User} from "../classes";
import {MatTableDataSource} from "@angular/material/table";
import {EquipmentTableComponent} from "../equipment-table/equipment-table.component";

@Component({
  selector: 'app-page-rab-mest',
  templateUrl: './page-rab-mest.component.html',
  styleUrls: ['./page-rab-mest.component.css']
})
export class PageRabMestComponent implements OnInit {
  otdels:Otdel[]=[];
  selectOtdel: Otdel ={id:0, name:''};
  dataSourceUsers = new MatTableDataSource<User>();
  countEquipment: number = 0;
  @ViewChild(EquipmentTableComponent)
  private equipmentTableComponent:EquipmentTableComponent;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.findAllOtdels().subscribe(post => {
      this.otdels = post;
      this.selectOtdel = this.otdels[0];
      this.selectedOtdel(this.selectOtdel);
    })
  }
  selectedOtdel(ot:Otdel){
    this.selectOtdel = ot;
    this.api.findUserByOtdel(this.selectOtdel).subscribe( data => {
        this.dataSourceUsers = new MatTableDataSource<User>(data);
    });
    this.api.findCountEquipmentByOtdel(this.selectOtdel).subscribe(data =>{
      this.countEquipment = data;
    })
    this.equipmentTableComponent.update(this.selectOtdel);
  }
  addEquipment(){
    this.equipmentTableComponent.addEquipment();
    this.api.findCountEquipmentByOtdel(this.selectOtdel).subscribe(data =>{
      this.countEquipment = data;
    })
  }
}
