export interface User{
  email:string;
  role:string;
  fio:string;
  dolzhnost:string;
  otdel:Otdel;
}
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
  user:User;
  category_equipment:CategoryEquipment;
  otdel:Otdel;
}
export interface CategoryEquipment{
  id:number;
  name:string;
}
export interface ComponentsEquipment{
  id: number;
  number:number;
  equipment:Equipment;
  component:Component
}
export interface Component{
  id:number;
  name:string;
}
