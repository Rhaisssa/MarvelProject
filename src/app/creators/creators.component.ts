import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

  creators:any=[];

  ngOnInit(): void {

    this.service.GetAllCreators().subscribe((result)=>{
      console.log(result);
      this.creators = result.data.results;
    });
  }

}
