import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  template: `
   <h2>Employee List</h2>
   <ul *ngFor="let employee of employees">
     <li>{{employee.name}}</li>
     </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

 
  public employees = [];
  constructor(private _employeeServices : EmployeesService) { }

  ngOnInit() {
    this._employeeServices.getEmployees()
    .subscribe(data => this.employees = data);

  }

}
