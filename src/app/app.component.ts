import { Component } from '@angular/core';
import {ApiService} from "./api";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'computerNetworkFront';
  user: string;
  constructor(private api: ApiService,
              private router: Router) {
    this.user = localStorage.getItem('email') as string;
    window.addEventListener('storage',event =>{
      if(event.key === 'email') {this.user = event.newValue as string};
      console.log('jr');
    }
    );
  }
  logout() {
    this.router.navigate(['/auth']);
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    localStorage.removeItem('role');

  }
}
