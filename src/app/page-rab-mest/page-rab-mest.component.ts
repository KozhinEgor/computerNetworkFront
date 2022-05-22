import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api";
import {Equipment, Otdel, User} from "../classes";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-page-rab-mest',
  templateUrl: './page-rab-mest.component.html',
  styleUrls: ['./page-rab-mest.component.css']
})
export class PageRabMestComponent implements OnInit {
  otdels:Otdel[]=[];
  selectOtdel: Otdel | null = null;
  dataSourceUsers = new MatTableDataSource<User>();
  dataSourceEquipment = new MatTableDataSource<Equipment>();
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
    this.api.findEquipmentByOtdel(this.selectOtdel).subscribe( data => {
      this.dataSourceEquipment = new MatTableDataSource<Equipment>(data);
    });

  }
}
