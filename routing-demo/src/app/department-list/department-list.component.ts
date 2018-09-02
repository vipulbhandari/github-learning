import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
    <h3>Department list</h3>
    <ul>
    <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
      <span>{{department.id}} {{department.name}}</span>
    </li>
    <ul>
  `,
  styles: [
    `
    .item li.selected{
      background-color: #CFD8DC;
    }
    `
  ]
})
export class DepartmentListComponent implements OnInit {
public selectedId;
  departments = [
    {"id":1,"name":"vipul"},
    {"id":2,"name":"rajesh"},
    {"id":3,"name":"deepAK"},
    {"id":4,"name":"biraj"},
  ]
  constructor(private router: Router,private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department)
  {
    this.router.navigate(['/departments',department.id])
  }

  isSelected(department)
  {
    return department.id === this.selectedId;
  }
}
