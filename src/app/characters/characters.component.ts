import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private service:MarvelAPIService) { }

  characters: any=[];
  findCharacter:any=[];
  showSearchResult: boolean = false;
  showComicsDiv:boolean = false;
  showSeriesDiv:boolean = false;
  showCharacterDiv:boolean = false;
  showCreatorsDiv:boolean = false;
  showStoriesDiv:boolean = false;
  characterByName: string | any;
  series:any=[];
  stories:any=[];
  creators:any=[];
  comics:any=[];


  ngOnInit(): void {
    this.showComicsDiv = false;
    this.showSeriesDiv = false;
    this.showCreatorsDiv = false;
    this.showStoriesDiv = false;
    this.showSearchResult = false;
    this.service.GetAllCharacters().subscribe((result) => {
      console.log(result);
      this.characters = result.data.results;
    });
  }

  GetCharacterByName(characterId:string)
  {
    console.log(characterId);
    this.service.GetCharacterByName(characterId).subscribe((result)=>{
      console.log(result);

      if(result.data.count>0)
     {
       this.showSearchResult = true;
       this.findCharacter = result.data.results;
     }
     else{

       this.ngOnInit();
      }
    })
  }


  GetComicsByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.GetComicsByCharacter(characterId).subscribe((result)=>{

      if(result.data.count>0)
      {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }


  GetSeriesByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.GetSeriesByCharacter(characterId).subscribe((result)=>{

      if(result.data.count>0)
      {
        this.series = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }

  GetStoriesByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.GetStoriesByCharacter(characterId).subscribe((result)=>{

      if(result.data.count>0)
      {
        this.stories = result.data.results;
        this.showComicsDiv = true;
      }
    })
  }

}
