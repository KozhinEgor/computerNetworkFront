import {Component, Input, OnInit} from '@angular/core';
import {ComponentEquipment, Equipment, ProgramKeyEquipment} from "../classes";
import {ApiService} from "../api";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {DialogSelectComponent} from "../dialog-select/dialog-select.component";

@Component({
  selector: 'app-program-equipment',
  templateUrl: './program-equipment.component.html',
  styleUrls: ['./program-equipment.component.css']
})
export class ProgramEquipmentComponent implements OnInit {
  displayedColumns = [ 'name','date_start','date_finish', 'value', 'delete'];
  dataSource = new MatTableDataSource<ProgramKeyEquipment>();
  @Input() eq:Equipment | undefined;
  constructor(public api:ApiService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.update();
  }
  public update(){
    this.api.findAllProgramByEquipment(this.eq).subscribe( data => {
      this.dataSource = new MatTableDataSource<ProgramKeyEquipment>(data);
      console.log(data);
    })
  }
  delete(eqCo:ProgramKeyEquipment){
    this.dialog.open(DialogSelectComponent,{data:{text:'Вы действительно хотите удалить '+eqCo.programKey.program.name + ' из ' + eqCo.equipment.name}}).afterClosed().subscribe(data =>{
      if(data){
        this.api.deleteProgramEquipment(eqCo).subscribe( data => {
          this.dataSource = new MatTableDataSource<ProgramKeyEquipment>(data);
        })
      }
    })

  }

}
