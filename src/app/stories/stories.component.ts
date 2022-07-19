import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css']
})
export class StoriesComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

  stories:any=[];

  ngOnInit(): void {

    this.service.GetAllStories().subscribe((result)=>{
      console.log(result);
      this.stories = result.data.results;
    })
  }

}
