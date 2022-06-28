import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../api";
import {MatDialog} from "@angular/material/dialog";
import {ErrorComponent} from "../../error/error.component";

@Component({
  selector: 'app-create-program',
  templateUrl: './create-prog.component.html',
  styleUrls: ['./create-prog.component.css']
})
export class CreateProgComponent implements OnInit {

  name:string= '';
  constructor(private api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  save(){
    if(this.name !=''){
      this.api.createProgram(this.name).subscribe(data =>{
        this.dialog.open(ErrorComponent,{data:{text:'Сохранил'}});
      })
    }
    else{
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }

  }

}
