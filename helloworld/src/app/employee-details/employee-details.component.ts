import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
    <li>{{employee.name}}.{{employee.age}}</li>
    </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  
  public employees = [];

  constructor(private _employeeServices : EmployeesService) { }

  ngOnInit() {
    this._employeeServices.getEmployees()
    .subscribe(data => this.employees = data);

  }

}
