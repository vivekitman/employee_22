import { Component, inject, OnInit, signal } from '@angular/core';
import { EmployeeService } from '../../core/services/employee-service';
import { IEmployeeList } from '../../core/models/EmployeeModel';
import { single } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  empService = inject(EmployeeService);
  EmpListsignal= signal<IEmployeeList[]>([]);

  ngOnInit():void{
    this.loadEmployee();
  }

  loadEmployee(){
    this.empService.getAllEmployees().subscribe({

      next:(res:IEmployeeList [] ) =>{
        this.EmpListsignal.set(res)

      }
    })
  }

}
