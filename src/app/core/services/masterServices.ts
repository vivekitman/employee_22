import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IpaerntDeperModerl, UserResponse } from '../models/User.Model';
import { environment } from '../../../environments/environment.development';
import { constants } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class MasterServices {
  
  http=inject(HttpClient)

  getAllPaerentDepartments() :Observable<UserResponse> {
    return this.http.get<UserResponse>(environment.Api_Url + "GetParentDepartment");
  }

  getChildDepartments() :Observable<UserResponse> {
    return this.http.get<UserResponse>(environment.Api_Url + "GetAllChildDepartment");
  }
  
  GetChildDepartmentByParentId(id:number):Observable<UserResponse> {
    return this.http.get<UserResponse>(environment.Api_Url + constants.App_Methods.Get_Child_BY_Parent+id);
  }
}
