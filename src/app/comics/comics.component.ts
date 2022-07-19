import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

 comics:any=[];

  ngOnInit(): void {

    this.service.GetAllComics().subscribe((result)=>{
      console.log(result);
      this.comics = result.data.results;
    });
  }

}
