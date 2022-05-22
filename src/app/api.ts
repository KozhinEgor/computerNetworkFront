import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CategoryEquipment, ComponentsEquipment, Equipment, Otdel, User, UserA} from "./classes";
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
  findUserByOtdel(otdel:Otdel){
    return this.http.post(this.host + '/findUserByOtdel',otdel).pipe(
      map(posts => posts as User[])
    )
  }

  findEquipmentByOtdel(otdel:Otdel){
    return this.http.post(this.host + '/findEquipmentByOtdel',otdel).pipe(
      map(posts => posts as Equipment[])
    )
  }

  findComponentsEquipmentByEquipment(eq:Equipment){
    return this.http.post(this.host + '/findComponentsEquipmentByEquipment',eq).pipe(map(posts => posts as ComponentsEquipment[]))
  }

  findAllCategoryEquipment(){
    return this.http.get(this.host + '/findAllCategoryEquipment').pipe(map(gets => gets as CategoryEquipment[]))
  }

  updateEquipment(equipment:Equipment){
    return this.http.put(this.http + '/Equipment', equipment).pipe(map(post => post as Equipment))
  }
}
