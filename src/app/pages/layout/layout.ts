import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../core/models/User.Model';
 

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  loggedUser!:User;
   

  constructor(private router: Router) {
    debugger;
    const localData = localStorage.getItem('empUser'); 

    if (localData !== null) {
      this.loggedUser = JSON.parse(localData);
    }
  }

  onlogoff() {
    localStorage.removeItem('empUser');
    this.router.navigate(['/login']);

  }
}
