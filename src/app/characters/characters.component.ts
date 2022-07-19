import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

  Characters: any=[];
  showSearchResult: boolean = false;
  comics:any=[];
  showComicsDiv:boolean = false;


  ngOnInit(): void {
    this.showSearchResult = false;
    this.service.GetAllCharacters().subscribe((result) => {
      console.log(result);
      this.Characters = result.data.results;
    });
  }

  GetComicsByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.getComicsByCharacter(characterId).subscribe((result)=>{
      console.log(result);

      if(result.data.count>0)
      {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }

}
