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
  user:User | null;
  category_equipment:CategoryEquipment | null;
  otdel:Otdel | null;
}
export interface CategoryEquipment{
  id:number;
  name:string;
}

export interface Component{
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
  srock:Date;
  categoryComponent:CategoryComponent;
  vendor:Vendor;
}
export interface ComponentEquipment{
  id:number;
  number:number;
  comp:Component;
  equipment:Equipment;
}
