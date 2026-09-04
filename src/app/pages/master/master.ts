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
        this.chaildDepartment.set(res.data)
      }
    })
  }

   ngOnInit(): void {
    this.getAllPaerentDepartments()
    this.getChildDepartments()
     
  }





}
