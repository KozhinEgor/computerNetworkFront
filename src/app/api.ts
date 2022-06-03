import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {
  CategoryEquipment,
  ComponentEquipment,
  Components,
  Equipment,
  Otdel,
  User,
  UserA
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

  findAllByEquipment(eq: Equipment | undefined){
    return this.http.post(this.host+'/findAllByEquipment', eq).pipe(
      map(posts => posts as ComponentEquipment[])
    );
  }
  deleteComponentEquipment(eqCo:ComponentEquipment){
    return this.http.post(this.host+"/deletecomponentEquipment",eqCo).pipe(map(data => data as ComponentEquipment[]))
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

  findComponentsEquipmentByEquipment(eq:Equipment){
    return this.http.post(this.host + '/findComponentsEquipmentByEquipment',eq).pipe(map(posts => posts as ComponentEquipment[]))
  }

  findAllCategoryEquipment(){
    return this.http.get(this.host + '/findAllCategoryEquipment').pipe(map(gets => gets as CategoryEquipment[]))
  }

  updateEquipment(equipment:Equipment){
    return this.http.put(this.host + '/Equipment', equipment).pipe(map(post => post as Equipment))
  }

  createEquipment(otdel: Otdel | undefined){
    return this.http.post(this.host + '/equipmentCreate', otdel).pipe(map(post => post as Equipment[]))
  }
  addEqComp(eqCO: ComponentEquipment){
    return this.http.post(this.host + '/addEqComp',eqCO).pipe(map(posts => posts as ComponentEquipment[]))
  }
  deleteEquipment(eq:Equipment){
    return this.http.post(this.host + '/deleteEquipment',eq).pipe(map(posts => posts as Equipment[]))
  }
}
