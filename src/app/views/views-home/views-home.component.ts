import { Component } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {
  data = [
  {value : 22 , label : '# of user'},
  {value : 48 , label : '#like'},
  {value : 10 , label : '#comment'},
  ];
  items =[
    {}
  ];
}
