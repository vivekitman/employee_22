import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpaerntDeperModerl, UserResponse } from '../models/User.Model';

@Injectable({
  providedIn: 'root',
})
export class MasterServices {
  
  http=inject(HttpClient)

  getAllPaerentDepartments() :Observable<UserResponse> {
    return this.http.get<UserResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetParentDepartment");
  }

  getChildDepartments() :Observable<UserResponse> {
    return this.http.get<UserResponse>("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllChildDepartment");
  }
  
  
}
