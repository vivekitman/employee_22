import { Component, OnInit, inject, signal } from '@angular/core';
 
import { IchilddepartModel, IpaerntDeperModerl, UserResponse } from '../../core/models/User.Model';
import { MasterServices } from '../../core/services/masterServices';

@Component({
  selector: 'app-master',
  imports: [],
  templateUrl: './master.html',
  styleUrl: './master.css',
})
export class Master implements OnInit  {

  masterSr = inject(MasterServices)
  parentDepartments = signal<IpaerntDeperModerl[]>([])
  chaildDepartment = signal<IchilddepartModel[]>([])
  originalChildList : IchilddepartModel[]=[];

 

  getAllPaerentDepartments() {
     this.masterSr.getAllPaerentDepartments().subscribe({
      next: (res: UserResponse) => {
        this.parentDepartments.set(res.data)
      }
    })
  }

     getChildDepartments() {
    this.masterSr.getChildDepartments().subscribe( {
      next:(res: UserResponse) => {
        this.originalChildList=res.data;
        this.chaildDepartment.set(res.data)
      }
    })
  }

   ngOnInit(): void {
    this.getAllPaerentDepartments()
    this.getChildDepartments()
     
  }

  FilterSelectesDept(PId:number){
    const childDept = this.originalChildList.filter(m=>m.parentDeptId==PId);
    this.chaildDepartment.set(childDept);
  }





}
