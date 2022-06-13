import { Component, OnInit, ViewChild } from '@angular/core';
import {Components} from "../classes";
import {ApiService} from "../api";
import {UserTableComponent} from "../user-table/user-table.component";
import {VendorComponent} from "../vendor/vendor.component";
import {CategoryaComplectComponent} from "../categorya-complect/categorya-complect.component";

@Component({
  selector: 'app-reestr-componentov',
  templateUrl: './reestr-componentov.component.html',
  styleUrls: ['./reestr-componentov.component.css']
})
export class ReestrComponentovComponent implements OnInit {
selectComp:Components = {
  id: null,
  characteristick:'',
  categoryComponent:null,
  name:'',
  vendor:null
};
components:Components[] = [];
  @ViewChild(VendorComponent)
  vendor:VendorComponent

  @ViewChild(CategoryaComplectComponent)
  categoryaComplectComponent:CategoryaComplectComponent

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  this.api.findAllComponent().subscribe( data => {
    this.components= data;
  })
  }
  default(){
    this.selectComp = {
      id: null,
      characteristick:'',
      categoryComponent:null,
      name:'',
      vendor:null
    };
    this.categoryaComplectComponent.myControl.setValue('');
    this.vendor.myControl.setValue('');
  }
  selectedComp(c:Components){
    this.selectComp = c;
    this.vendor.selectCategory(c.vendor)
    this.categoryaComplectComponent.selectCategory(c.categoryComponent);
  }
  save(){
    if(this.selectComp.name !== '' && this.selectComp.characteristick !== '' &&
    (typeof this.categoryaComplectComponent.myControl.value !== "string" && this.categoryaComplectComponent.myControl.value !== null && this.categoryaComplectComponent.myControl.value !== undefined)
    && (typeof this.vendor.myControl.value !== "string" && this.vendor.myControl.value !== null && this.vendor.myControl.value !== undefined)){
     this.selectComp.categoryComponent = this.categoryaComplectComponent.myControl.value;
     this.selectComp.vendor = this.vendor.myControl.value;
     console.log(this.selectComp);
      this.api.saveComponent(this.selectComp).subscribe(data =>{
        this.components = data;
       this.default();
      })
    }
  }
}