export interface User{
  email:string;
  role:string;
  fio:string;
  dolzhnost:string;
  otdel:Otdel;
}
class checkUser{}
export interface UserA{
  email:string;
}
export interface Otdel{
  id:number;
  name:string;
}
export interface Equipment{
  id:number;
  name:string;
  user:User ;
  category_equipment:CategoryEquipment ;
  otdel:Otdel ;
}
export interface CategoryEquipment{
  id:number;
  name:string;
}

export interface CategoryComponent{
  id:number;
  name:string;

}
export interface Vendor{
  id:number;
  name:string;
}
export interface Components{
  id:number;
  name:string;
  characteristick:string;
  categoryComponent:CategoryComponent;
  vendor:Vendor;
}
export interface ComponentEquipment{
  id:number;
  number:number;
  comp:Components;
  equipment:Equipment;
}
export interface DialogExportData{
  text: string;
}
export interface Program{
  id: number;
  name: string;
}
export interface ProgramKey{
  id: number;
  name:string;
  program:Program;
  value:string;
  date_start:Date;
  date_finish:Date;
  programEquipment:ProgramKeyEquipment[];
}
export interface ProgramKeyEquipment{
  id: number;
  equipment:Equipment;
  programKey:ProgramKey;
}
export interface Sklad{
  id:number;
  component:Components;
  number:number;
}
