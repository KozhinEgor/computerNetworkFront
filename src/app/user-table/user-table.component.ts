import {Component, Input, OnInit} from '@angular/core';
import {User} from "../classes";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  displayedColumns = ['email','fio','dolzhnost', 'edit'];
  @Input() dataSource = new MatTableDataSource<User>();
  constructor() { }

  ngOnInit(): void {
  }
  openEdit(u:User){

  }
}
