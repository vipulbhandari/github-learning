import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `
   <h2>{{ person | json }}</h2>
           `,
  styles: [`.text-danger{color:red} .text-special{font-style:italic} .text-success{color:green}`]
})
export class TestComponent implements OnInit {

  constructor() { }
 public colors = ["green","yellow","red","orange"];
 @Input() public parentData;
 @Output() public childEvent = new EventEmitter();  
 public name = "hello codevolution";
  ngOnInit() {
  }

 public person =
 {
   "firstname" : "vipul",
   "lastname" : "bhandari"
 }

}
