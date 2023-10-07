import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-place-holder',
  templateUrl: './place-holder.component.html',
  styleUrls: ['./place-holder.component.css']
})
export class PlaceHolderComponent {
  @Input() lines = 4;
  @Input() header = true;

  constructor() {}

  ngOnInit() :void {

  }
}
