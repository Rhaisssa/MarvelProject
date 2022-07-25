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
  comics: any = [];
  series: any = [];
  events: any = [];
  showComics: boolean = false;
  showSeries: boolean = false;
  showEvents: boolean = false;
  characterName!: string;
  characterId: any;
  showCharacterName: boolean = false;
  showCharacterId: boolean = false;
  findedCharacter: any = [];

  ngOnInit(): void {
    this.showComics = false;
    this.showSeries = false;
    this.showCharacterName = false;
    this.service.GetAllCharacters().subscribe((result) => {
      console.log(result);
      this.characters = result.data.results;
    });
  }

  findCharacterName(event: any) {
    this.characterName = event.target.value;
    console.log(this.characterName);
    this.service.GetCharacterByName(this.characterName).subscribe((result) => {
      console.log(result);
      if (result.data.count > 0) {
        this.showCharacterName = true;
        this.findedCharacter = result.data.results;
      } else {
        this.ngOnInit();
      }
    });

  }

  getCharactersByCharacterId(characterId: any) {
    console.log(characterId);
    this.service.GetCharacterByCharacterId(characterId).subscribe((result) => {
      if (result.data.count > 0) {
        this.characterId = result.data.results;
        this.showCharacterId = true;
      }
    });
  }

  GetComicsByCharacter(characterId: string) {
    console.log(characterId);
    this.service.GetComicsByCharacter(characterId).subscribe((result) => {
      if (result.data.count > 0) {
        this.comics = result.data.results;
        this.showComics = true;
      }
    });
  }

  GetSeriesByCharacter(characterId: string) {
    console.log(characterId);
    this.service.GetSeriesByCharacter(characterId).subscribe((result) => {
      if (result.data.count > 0) {
        this.series = result.data.results;
        this.showSeries = true;
      }
    });
  }

  GetEventsByCharacterId(characterId: string) {
    console.log(characterId);
    this.service.GetEventsByCharacterId(characterId).subscribe((result) => {
      if (result.data.count > 0) {
        this.events = result.data.results;
        this.showEvents = true;
      }
    });
  }
}
