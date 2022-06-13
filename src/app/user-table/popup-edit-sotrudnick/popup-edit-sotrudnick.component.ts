import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {Equipment, User} from "../../classes";
import {SelectOtdelComponent} from "../../select-otdel/select-otdel.component";
import {ApiService} from "../../api";
import {ErrorComponent} from "../../error/error.component";

@Component({
  selector: 'app-popup-edit-sotrudnick',
  templateUrl: './popup-edit-sotrudnick.component.html',
  styleUrls: ['./popup-edit-sotrudnick.component.css']
})
export class PopupEditSotrudnickComponent implements OnInit {

  @ViewChild(SelectOtdelComponent)
  selectOtdelComponent:SelectOtdelComponent

  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  Save(){
    if(this.data.fio !== '' && this.data.email !== '' && this.data.dolzhnost && typeof this.selectOtdelComponent.myControl.value !== "string" && this.selectOtdelComponent.myControl.value !== null){
        this.api.saveUser(this.data).subscribe(data => {
          this.dialog.open(ErrorComponent, {data:{text:'Сохранил'}});
        });
    }
    else {
      this.dialog.open(ErrorComponent, {data:{text:'Данные заполнены не верно'}});
    }
  }
}
