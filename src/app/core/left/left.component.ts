import { Component, OnInit , Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.scss']
})
export class LeftComponent implements OnInit {
  @Input() show: boolean;


  constructor() { }

  ngOnInit() {
  }

}
