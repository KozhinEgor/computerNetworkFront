import {Component, Input, OnInit} from '@angular/core';
import {Otdel, User} from "../classes";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {ApiService} from "../api";
import {PopupEditSotrudnickComponent} from "./popup-edit-sotrudnick/popup-edit-sotrudnick.component";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input() otdel:Otdel;
  displayedColumns = ['email','fio','dolzhnost', 'edit'];
  dataSource = new MatTableDataSource<User>();
  constructor(public dialog: MatDialog,private api:ApiService) { }

  ngOnInit(): void {
    this.update(this.otdel);
  }
  openEdit(u:User){
      this.dialog.open(PopupEditSotrudnickComponent, {data:u}).afterClosed().subscribe(data =>{

      })
  }
  update(otdel:Otdel){
    this.otdel = otdel;
    this.api.findUserByOtdel(otdel).subscribe( data => {
      this.dataSource = new MatTableDataSource<User>(data);
    });
  }
createUser(){this.api.createUser(this.otdel).subscribe(data =>{
  this.dataSource = new MatTableDataSource<User>(data);
})

}
}
