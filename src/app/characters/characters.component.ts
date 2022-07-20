import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private service: MarvelAPIService) {}

  characters: any = [];
  series: any = [];
  stories: any = [];
  creators: any = [];
  comics: any = [];
  findCharacter: any = [];
  showSearchResult: boolean = false;
  showComicsDiv: boolean = false;

  characterBySeriesId: number | any;
  characterSeriesId: any;


  ngOnInit(): void {
    this.showComicsDiv = false;
    this.showSearchResult = false;
    this.service.GetAllCharacters().subscribe((result) => {
      console.log(result);
      this.characters = result.data.results;
    });
  }

  GetCharacterBySeriesId(event:any) {
    this.characterSeriesId = event.target.value;
    console.log(this.characterSeriesId);
    this.service.GetCharacterBySeriesId(this.characterSeriesId).subscribe((result) => {
      console.log(result);

      if (result.data.count > 0) {
        this.showSearchResult = true;
        this.findCharacter = result.data.results;
      } else {
        this.ngOnInit();
      }
    });
  }

  GetComicsByCharacter(characterId: string) {
    console.log(characterId);
    this.service.GetComicsByCharacter(characterId).subscribe((result) => {
      if (result.data.count > 0) {
        this.comics = result.data.results;
        this.showComicsDiv = true;
      }
    });
  }

  /*
  GetSeriesByCharacter(characterId:string)
  {
    console.log(characterId);
    this.service.GetSeriesByCharacterId(characterId).subscribe((result)=>{

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
  }*/
}
