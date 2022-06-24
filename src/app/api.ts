import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {
  CategoryComponent,
  CategoryEquipment,
  ComponentEquipment,
  Components,
  Equipment,
  Otdel, ProgramKey, ProgramKeyEquipment, Sklad,
  User,
  UserA, Vendor
} from "./classes";
import {environment} from "../environments/environment";
import {BehaviorSubject, map, Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private host = environment.apiUrl;

  public user: User | undefined;

  constructor(private router: Router,private http: HttpClient) {

  }

  login(user:UserA) {
    return this.http.post<any>(this.host+'/login',  user)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('email', user.email);
        localStorage.setItem('role',user.role);

        return user;
      }));
  }

  findAllOtdels(){
    return this.http.get(this.host+'/allOtdels').pipe(
      map(posts => posts as Otdel[])
    );
  }
  findAllFreeComponents(){
    return this.http.get(this.host+'/findAllFreeComponents').pipe(
      map(posts => posts as Components[])
    );
  }
  findAllComponent(){
    return this.http.get(this.host+'/findAllComponent').pipe(
      map(posts => posts as Components[])
    );
  }
  findFreeComponent(){
    return this.http.get(this.host+'/findFreeComponent').pipe(
      map(posts => posts as Sklad[])
    );
  }
  findComponentNoSklad(){
    return this.http.get(this.host+'/findComponentNoSklad').pipe(
      map(posts => posts as Components[])
    );
  }
  findFreeProgramKeys(){
    return this.http.get(this.host+'/findFreeProgramKeys').pipe(
      map(posts => posts as ProgramKey[])
    );
  }
  findAllByEquipment(eq: Equipment | undefined){
    return this.http.post(this.host+'/findAllByEquipment', eq).pipe(
      map(posts => posts as ComponentEquipment[])
    );
  }
  razobrat(eq: Equipment | undefined){
    return this.http.post(this.host+'/razobrat', eq).pipe(
      map(posts => posts as string)
    );
  }

  findAllProgramByEquipment(eq: Equipment | undefined){
    return this.http.post(this.host+'/findAllProgramByEquipment', eq).pipe(
      map(posts => posts as ProgramKeyEquipment[])
    );
  }

  deleteComponentEquipment(eqCo:ComponentEquipment){
    return this.http.post(this.host+"/deletecomponentEquipment",eqCo).pipe(map(data => data as ComponentEquipment[]))
  }
  deleteProgramEquipment(eqCo:ProgramKeyEquipment){
    return this.http.post(this.host+"/deleteProgramEquipment",eqCo).pipe(map(data => data as ProgramKeyEquipment[]))
  }
  findUserByOtdel(otdel:Otdel){
    return this.http.post(this.host + '/findUserByOtdel',otdel).pipe(
      map(posts => posts as User[])
    )
  }

  findUsers(){
    return this.http.get(this.host + '/findUser').pipe(
      map(posts => posts as User[])
    )
  }

  findEquipmentByOtdel(otdel:Otdel){
    return this.http.post(this.host + '/findEquipmentByOtdel',otdel).pipe(
      map(posts => posts as Equipment[])
    )
  }
  findCountEquipmentByOtdel(otdel:Otdel){
    return this.http.post(this.host + '/findCountEquipmentByOtdel',otdel).pipe(
      map(posts => posts as number)
    )
  }
  findCountUserByOtdel(otdel:Otdel){
    return this.http.post(this.host + '/findCountUserByOtdel',otdel).pipe(
      map(posts => posts as number)
    )
  }
  findComponentsEquipmentByEquipment(eq:Equipment){
    return this.http.post(this.host + '/findComponentsEquipmentByEquipment',eq).pipe(map(posts => posts as ComponentEquipment[]))
  }

  findAllCategoryEquipment(){
    return this.http.get(this.host + '/findAllCategoryEquipment').pipe(map(gets => gets as CategoryEquipment[]))
  }
  findAllCategoryComponent(){
    return this.http.get(this.host + '/findAllCategoryComponent').pipe(map(gets => gets as CategoryComponent[]))
  }
  findAllVendor(){
    return this.http.get(this.host + '/findAllVendor').pipe(map(gets => gets as Vendor[]))
  }

  updateEquipment(equipment:Equipment){
    return this.http.put(this.host + '/Equipment', equipment).pipe(map(post => post as Equipment))
  }

  createEquipment(otdel: Otdel | undefined){
    return this.http.post(this.host + '/equipmentCreate', otdel).pipe(map(post => post as Equipment))
  }

  addToSklad(comp:Components){
    return this.http.post(this.host + '/addToSklad', comp).pipe(map(post => post as Sklad))
  }
  addEqComp(eqCO: ComponentEquipment){
    return this.http.post(this.host + '/addEqComp',eqCO).pipe(map(posts => posts as ComponentEquipment[]))
  }
  addProgrammEq(programEq:ProgramKeyEquipment){
    return this.http.post(this.host + '/addProgrammEq',programEq).pipe(map(posts => posts as ProgramKeyEquipment[]))
  }
  deleteEquipment(eq:Equipment){
    return this.http.post(this.host + '/deleteEquipment',eq).pipe(map(posts => posts as Equipment[]))
  }
  saveUser(us:User){
    return this.http.post(this.host + '/saveUser',us).pipe(map(posts => posts as User))
  }
  createUser(ot:Otdel){
    return this.http.post(this.host + '/createUser',ot).pipe(map(posts => posts as User[]))
  }
  saveComponent(comp:Components){
    console.log(comp);
    return this.http.post(this.host + '/saveComponent', comp).pipe(map(posts => posts as Components[]))
  }
  updateSklad(comp:Sklad){
    console.log(comp);
    return this.http.post(this.host + '/updateSklad', comp).pipe(map(posts => posts as Sklad[]))
  }

}
