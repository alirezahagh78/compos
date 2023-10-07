import { Component , Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit { 
  @Input()data :{name : string , age: number, job: string};
  // @Input()data:[];
  @Input()headers :[];
  @Input()name:string  = "";
  @Input()className = "basic"
  
  // addNewData(){
  //   this.data.push(
  //     {name : 'newData', age : 24 , job : 'designer'},
  //   )
  // }
  
  constructor(){}
  ngAfterContentChecked(){
    console.log(this.data);
    
  }
  changeClassTable(){
    this.className = "celled"
  }
  ngOnInit() : void {}

  ngOnchanges(){
    console.log(this.className);
  }
  ngOnDestroy() : void {
    console.log('onDestroy');
    
  }
}
