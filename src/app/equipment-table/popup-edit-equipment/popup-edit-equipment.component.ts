import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {ApiService} from "../../api";
import {CategoryEquipment, ComponentsEquipment, Equipment, Otdel, User} from "../../classes";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-popup-edit-equipment',
  templateUrl: './popup-edit-equipment.component.html',
  styleUrls: ['./popup-edit-equipment.component.css']
})
export class PopupEditEquipmentComponent implements OnInit {
  dataSource = new MatTableDataSource<ComponentsEquipment>();
  constructor(@Inject(MAT_DIALOG_DATA) public data: Equipment, private api: ApiService) { }

  ngOnInit(): void {
    // this.api.findComponentsEquipmentByEquipment(this.data).subscribe( data => {
    //   this.dataSource = new MatTableDataSource<ComponentsEquipment>(data);
    // })
  }
  onChangecategory_equipment(t: any){
    if(t as CategoryEquipment && t.id !== this.data.category_equipment?.id){
      this.data.category_equipment = t;
      this.api.updateEquipment(this.data).subscribe(data => {
        this.data = data;
      })
    }
  }
  onChangeOtdel(t:any){
    if(t as Otdel && t.id !== this.data.otdel?.id){
      this.data.otdel = t;
      this.api.updateEquipment(this.data).subscribe(data => {
        this.data = data;
      })
    }
  }
  onChangeUser(t:any){
    if(t as User && t.email !== this.data.user?.email){
      this.data.user = t;
      this.api.updateEquipment(this.data).subscribe(data => {
        this.data = data;
      })
    }
  }
}
