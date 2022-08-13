import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data:Array<any>;
 
  constructor(private dataServices:DataServices){
    this.data = new Array<any>();
  }
  ngOnInit(){
    this.getDataFromAPI()
  }
  getDataFromAPI(){
    this.dataServices.getUsers().subscribe((data) => {
      console.log(data)
      this.data = data
    })
  }
}
