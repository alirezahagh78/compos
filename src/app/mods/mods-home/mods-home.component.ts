import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  showModal : boolean = false;
  ngOnInit(): void {
      
  }
  onChangeModal(){ 
    this.showModal = !this.showModal;
  }
}
