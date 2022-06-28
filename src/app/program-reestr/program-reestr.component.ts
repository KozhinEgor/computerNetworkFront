import {Component, OnInit, ViewChild} from '@angular/core';
import {Equipment, ProgramKey, Sklad} from "../classes";
import {ApiService} from "../api";
import {MatDialog} from "@angular/material/dialog";
import {DialogSelectComponent} from "../dialog-select/dialog-select.component";
import {PopupEditEquipmentComponent} from "../equipment-table/popup-edit-equipment/popup-edit-equipment.component";
import {AddCompComponent} from "../page-sklad/add-component/add-comp.component";
import {SelectProgramComponent} from "./select-program/select-program.component";
import {DatapickerComponent} from "./datapicker/datapicker.component";

@Component({
  selector: 'app-program-reestr',
  templateUrl: './program-reestr.component.html',
  styleUrls: ['./program-reestr.component.css']
})
export class ProgramReestrComponent implements OnInit {
  @ViewChild(SelectProgramComponent)
  private selectProgramComponent:SelectProgramComponent;
  @ViewChild('dateStart')
  private datapickerStart:DatapickerComponent;
  @ViewChild('dateFinish')
  private datapickerFinish:DatapickerComponent;
  programKey:ProgramKey[] = [];
  selectProgram:ProgramKey = {
    id:0,
    name:'',
    program:null,
    value:'',
    date_start:null,
    date_finish:null,
    programEquipment:null
  }
  // id, name? characteristick, categoryComponent, vendor
  constructor(private api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.update();
  }
  selectedComp(c:ProgramKey){

    this.selectProgramComponent.selectProgram(c.program);
    this.selectProgram = c;
    console.log(this.selectProgram)
    this.datapickerStart.date.setValue(c.date_start);
    this.datapickerFinish.date.setValue(c.date_finish)
  }
  update(){
    this.api.findProgram().subscribe(data =>{
      this.programKey = data;
    })
    this.selectProgram = {
      id:0,
      name:'',
      program:null,
      value:'',
      date_start:null,
      date_finish:null,
      programEquipment:null
    }
    if(this.selectProgramComponent !== undefined){
      this.selectProgramComponent.myControl.setValue('');
    }
  if(this.datapickerStart !== undefined){
    this.datapickerStart.date.setValue('');
  }

  if(this.datapickerFinish !== undefined){
    this.datapickerFinish.date.setValue('')
  }

  }
  save(){
    if(this.datapickerStart.date.value !== null && this.datapickerFinish.date.value !== null && this.selectProgramComponent.myControl.value !== null){
      this.selectProgram.program = this.selectProgramComponent.myControl.value;
      this.selectProgram.date_start = this.datapickerStart.date.value;
      this.selectProgram.date_finish = this.datapickerFinish.date.value;
      console.log(this.selectProgram);
    }

  }
  delete(){
    // this.selectComp.number = null;
    // this.dialog.open(DialogSelectComponent,{data:{text:'Вы хотите изменить списать компоненты?'}}).afterClosed().subscribe(data =>{
    //   if(data){
    //     this.api.updateSklad(this.selectComp).subscribe(data =>{
    //       this.components = data;
    //     });
    //   }
    //   this.update();
    // })
  }
  openEquipment(e:Equipment){
    this.dialog.open(PopupEditEquipmentComponent,{width: '80%',
      height: '90%',data: e}).afterClosed().subscribe(data => {this.update()})
  }
  addProg(){
    // this.api.createEquipment({id:1,name:''}).subscribe( data => {
    //   this.dialog.open(PopupEditEquipmentComponent,{width: '80%', height: '90%',data:data}).afterClosed().subscribe(d => {
    //     this.update();
    //   })
    // });
  }
  addKey(){
    // this.dialog.open(AddCompComponent).afterClosed().subscribe(data => {
    //   if(typeof data !== "string" && data !== null && data != undefined){
    //     this.api.addToSklad(data).subscribe(data => {
    //       this.update();
    //     });
    //   }
    // });
  }
}
