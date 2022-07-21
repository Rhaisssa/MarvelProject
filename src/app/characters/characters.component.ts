import { Component, OnInit } from '@angular/core';
import { MarvelAPIService } from '../Service/marvel-api.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent implements OnInit {
  constructor(private service: MarvelAPIService) {

  }

  characters: any = [];
  series: any = [];
  findCharacters: any = [];
  findSeries: any = [];
  showSearchResultCharacter: boolean = false;
  showSearchResultSeries: boolean = false;
  charactersSeriesId: any;
  charactersCharacterId: any;


  ngOnInit(): void {

    this.showSearchResultCharacter = false;
    this.service.GetAllCharacters().subscribe((result) => {
      console.log(result);
    this.characters = result.data.results;
    });

    this.showSearchResultSeries = false;
    this.service.GetAllSeries().subscribe((result) =>{
      console.log(result);
      this.series = result.data.results;
    });

  }

   GetCharacterByCharacterId(event: any) {
    this.charactersCharacterId = event.target.value;
    console.log(this.charactersCharacterId);
    this.service
      .GetCharacterBySeriesId(this.charactersCharacterId)
      .subscribe((result) => {
        console.log(result);

        if (result.data.count > 0) {
          this.showSearchResultCharacter = true;
          this.findCharacters = result.data.results;
        } else {
          this.ngOnInit();
        }
      });
  }

  GetCharacterBySeriesId(event: any) {
    this.charactersSeriesId = event.target.value;
    console.log(this.charactersSeriesId);
    this.service
      .GetCharacterBySeriesId(this.charactersSeriesId)
      .subscribe((result) => {
        console.log(result);

        if (result.data.count > 0) {
          this.showSearchResultSeries = true;
          this.findSeries = result.data.results;
        } else {
          this.ngOnInit();
        }
      });
  }
}
