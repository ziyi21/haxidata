import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  isshowleft = true;
  constructor() { }
  ngOnInit() {
  }
  father($event): void {
    this.isshowleft = $event;
  }
}
