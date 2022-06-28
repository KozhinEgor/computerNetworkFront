import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {ApiService} from "../../api";
import {CategoryEquipment, ComponentEquipment, Equipment, Otdel, User} from "../../classes";
import {MatTableDataSource} from "@angular/material/table";
import {SelectComponentComponent} from "../../select-component/select-component.component";
import {TableComponentEquipmentComponent} from "../../table-component-equipment/table-component-equipment.component";
import {DialogSelectComponent} from "../../dialog-select/dialog-select.component";
import {SelectProgramKeyComponent} from "../../select-program-key/select-program-key.component";
import {ProgramEquipmentComponent} from "../../program-equipment/program-equipment.component";
import {ErrorComponent} from "../../error/error.component";

@Component({
  selector: 'app-popup-edit-equipment',
  templateUrl: './popup-edit-equipment.component.html',
  styleUrls: ['./popup-edit-equipment.component.css']
})
export class PopupEditEquipmentComponent implements OnInit {
  @ViewChild(SelectComponentComponent)
  private s: SelectComponentComponent;

  @ViewChild(SelectProgramKeyComponent)
  private selectProgramKeyComponent: SelectProgramKeyComponent;

  @ViewChild(ProgramEquipmentComponent)
  private tableProgram: ProgramEquipmentComponent;

  @ViewChild(TableComponentEquipmentComponent)
  private table: TableComponentEquipmentComponent;

  dataSource = new MatTableDataSource<ComponentEquipment>();
  num:number = 0;
  constructor(@Inject(MAT_DIALOG_DATA) public data: Equipment, private api: ApiService, private dialog:MatDialog) {
    this.s = new SelectComponentComponent(api);
  }

  ngOnInit(): void {

  }
  onChangecategory_equipment(t: any){
    if(typeof t != "string" && t.id !== this.data.category_equipment?.id){
      this.data.category_equipment = t;
      this.api.updateEquipment(this.data).subscribe(data => {
        this.data = data;
      })
    }
    else if (typeof t != "string" && t.id !== this.data.category_equipment?.id){
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
  }
  onChangeOtdel(t:any){
    console.log(typeof t != "string")
    if(typeof t != "string" && t.id !== this.data.otdel?.id){
      this.data.otdel = t;
      this.api.updateEquipment(this.data).subscribe(data => {
        this.data = data;
      })
    }
    else if (typeof t != "string" && t.id !== this.data.otdel?.id){
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
  }
  onChangeUser(t:any){

    if(typeof t != "string" && t.email !== this.data.user?.email){
      this.data.user = t;
      this.api.updateEquipment(this.data).subscribe(data => {
        this.data = data;
      })
    }
    else if(typeof t != "string" && t.email !== this.data.user?.email){
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
  }
  changeName(){
    if(this.data.name != null && this.data.name != ''){
      this.api.updateEquipment(this.data).subscribe(data => {
        this.data = data;
      })
    }
    else{
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
  }
  addComp(){
    if(this.num>0 && typeof this.s.myControl.value !== "string" && this.s.myControl.value !== null && this.s.myControl.value !== undefined)
      this.api.addEqComp({id:0,number:this.num,equipment:this.data,comp:this.s.myControl.value.component}).subscribe(data => {
        this.table.update();
        this.s.myControl.setValue('');
        this.s.update();
        this.num=0;
      })
    else{
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
    }
  addProgram(){
    if(typeof this.selectProgramKeyComponent.myControl.value !== "string" && this.selectProgramKeyComponent.myControl.value !== null && this.selectProgramKeyComponent.myControl.value !== undefined)
      this.api.addProgrammEq({id:0,equipment:this.data,programKey:this.selectProgramKeyComponent.myControl.value}).subscribe(data => {
        this.tableProgram.update();
        this.selectProgramKeyComponent.myControl.setValue('');
        this.selectProgramKeyComponent.update();
      })
    else{
      this.dialog.open(ErrorComponent,{data:{text: 'Проверьте значения'}})
    }
  }

  delete(){
    this.dialog.open(DialogSelectComponent,{data:{text:'Вы хотите разобрать оборудование'}}).afterClosed().subscribe(data=>{
      if(data){
        this.api.razobrat(this.data).subscribe(data => {
          this.dialog.open(ErrorComponent, {data:{text:data}});
        })
      }
    })
  }
}
