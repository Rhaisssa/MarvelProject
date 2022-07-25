import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MarvelAPIService {
  constructor(private http: HttpClient) {}

  BaseUrl =
    'https://gateway.marvel.com:443/v1/public/characters?apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';

  GetAllCharacters(): Observable<any> {
    return this.http.get(this.BaseUrl);
  }

  /*-----------------------------------------------------*/

  GetAllComics(): Observable<any> {
    const comicsUrl =
      'https://gateway.marvel.com:443/v1/public/comics?apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    return this.http.get(comicsUrl);
  }

  /*------------------------------------------------------*/

  GetAllEvents(): Observable<any> { //
    const eventsUrl =
      'https://gateway.marvel.com:443/v1/public/events?apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    return this.http.get(eventsUrl);
  }

  /*------------------------------------------------------*/

  GetAllSeries(): Observable<any> {
    const seriesUrl =
      'https://gateway.marvel.com:443/v1/public/series?apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    return this.http.get(seriesUrl);
  }

  /*-----------------------------------------------------*/

  GetCharacterByCharacterId(characterId: string): Observable<any> {
    const characterByCharacterId = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(characterByCharacterId);
  }

  /*-----------------------------------------------------*/

  GetCharacterBySeriesId(seriesId: string): Observable<any> {
    const characterBySeriesId = `https://gateway.marvel.com:443/v1/public/${seriesId}/series?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(characterBySeriesId);
  }

  /*-----------------------------------------------------*/

  GetCharacterByName(characterByName: string): Observable<any> {
    const characterByNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterByName}&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(characterByNameUrl);
  }

  /*-----------------------------------------------------*/

  GetComicsByCharacter(characterId: string): Observable<any> {
    const comicsByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(comicsByCharacterUrl);
  }

  GetSeriesByCharacter(characterId: string): Observable<any> {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(comicByCharacterUrl);
  }

/*-----------------------------------------------------*/

  GetEventsByCharacterId(characterId: string): Observable<any> {
    const eventsByCharacterId = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/events?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(eventsByCharacterId);
  }

}
