import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {DialogExportData, Equipment} from "../classes";

@Component({
  selector: 'app-dialog-select',
  templateUrl: './dialog-select.component.html',
  styleUrls: ['./dialog-select.component.css']
})
export class DialogSelectComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogExportData) { }

  ngOnInit(): void {
  }

}
