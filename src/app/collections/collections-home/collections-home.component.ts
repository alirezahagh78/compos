import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  pathCompanies = 'companies';
  data = [
    {name : 'ali', age : 24 , job : 'designer'},
    {name : 'reza', age : 30 , job : 'engineer'},
    {name : 'amir', age : 27 , job : 'ui'}, 
  ];
  headers = [
    {key : 'name' , value : 'Name',show:true},
    {key : 'age' , value : 'Age',show:true},
    {key :'job' , value : 'Job',show:true}
  ];
  changeFirstItem(){
    this.data[0].name = "new data!"
  }
}
