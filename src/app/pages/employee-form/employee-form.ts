import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MasterServices } from '../../core/services/masterServices';
import { map, Observable } from 'rxjs';
import { IchilddepartModel, IpaerntDeperModerl, UserResponse } from '../../core/models/User.Model';
import { AsyncPipe } from '@angular/common';
import { EmployeeService } from '../../core/services/employee-service';
import { IEmployeeList } from '../../core/models/EmployeeModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule,AsyncPipe],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm {

  EmpFrom :FormGroup = new FormGroup({

    employeeId  : new FormControl(0),
  employeeName  : new FormControl(""),
  contactNo : new FormControl(""),
  emailId : new FormControl(""),
  deptId: new FormControl(0),
  password : new FormControl(""),
  gender : new FormControl(""),
  role : new FormControl(""),
  createdDate : new FormControl("")
  });

   masterSr = inject(MasterServices)
   EmployeeSr = inject(EmployeeService)
   router = inject(Router)

   ChildDepList = signal<IchilddepartModel[]>([]);

   parentDepList$: Observable<IpaerntDeperModerl[]> = new Observable<IpaerntDeperModerl[]>();

    constructor(){
      this.parentDepList$ = this.masterSr.getAllPaerentDepartments().pipe(
        map((res:UserResponse)=>res.data)
      )
    }

   onDeptChange(event :any){
    const Pid = event.target.value;
    debugger;
    this.masterSr.GetChildDepartmentByParentId(Pid).subscribe({
      next:(res:UserResponse)=> {
this.ChildDepList.set(res.data);

      }
    })


   }
   OnSaveEmp(){
    const fromValiue = this.EmpFrom.value as IEmployeeList;
    this.EmployeeSr.saveEmp(fromValiue).subscribe({
        next:(data:IEmployeeList)=>{
          alert("Employee Add Succesfully")
          this.router.navigateByUrl("/emp-list")
        }
    })
   }

}
