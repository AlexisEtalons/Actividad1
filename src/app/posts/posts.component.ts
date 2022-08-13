import { Component, OnInit } from '@angular/core';
import { DataServices } from '../data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  dataPosts:Array<any>;


 
  constructor(private dataServices:DataServices){
    this.dataPosts = new Array<any>();
  }
  ngOnInit(){
    this.getDataFromAPI()
  }
  getDataFromAPI(){
    this.dataServices.getPosts().subscribe((data) => {
      this.dataPosts = data
    })
  
  }
}
