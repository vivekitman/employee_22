import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {   IEmployeeList } from '../models/EmployeeModel';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { constants } from '../constant/constant';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  http = inject(HttpClient);

  
  getAllEmployees() :Observable<IEmployeeList[]>{
    
    return this .http.get<IEmployeeList[]>(environment.Api_Url+ constants.App_Methods.Get_All_Employees);

    
  
}
saveEmp(obj:IEmployeeList):Observable<IEmployeeList>{
    
    return this .http.post<IEmployeeList>(environment.Api_Url+ constants.App_Methods.CreateEmp,obj);

}
}
