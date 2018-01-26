import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.scss']
})
export class RightComponent implements OnInit {
  @Output() changeMenu = new EventEmitter<boolean>();

  isOnOff = true ;

  constructor() {}

  ngOnInit() {
  }
  collapse() {
    if (this.isOnOff) {
      this.isOnOff = false;
    }else {
      this.isOnOff = true;
    }
    this.changeMenu.emit(this.isOnOff);
  }
}
