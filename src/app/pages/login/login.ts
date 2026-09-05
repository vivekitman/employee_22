import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  loginObj: any = {
    userName: '',
    password: ''
  }

  http=inject(HttpClient);
  router=inject(Router);

  onLogin() {
    debugger;
     this.http.post("https://projectapi.gerasim.in/api/EmployeeManagement/login", this.loginObj).subscribe ({
      next: (res: any) => {
       debugger;
       if(res.result){
         alert("Login Success");
       localStorage.setItem('empUser', JSON.stringify(res.data));
       this.router.navigate(['/emp-list']);
       }
       else{
        alert(res.message);
       }
      
      },
      error: (err: any) => {
        debugger;
        alert("Login Failed");
      }
     })

}
}
