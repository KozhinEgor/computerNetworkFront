import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ApiService} from "../api";
import {ErrorComponent} from "../error/error.component";

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.css']
})
export class AddVendorComponent implements OnInit {
name:string= '';
  constructor(private api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  save(){
    if(this.name !=''){
      this.api.createVendor(this.name).subscribe(data =>{
        this.dialog.open(ErrorComponent,{data:{text:'Сохранил'}});
      })
    }
    else{
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }

  }
}
