import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

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
