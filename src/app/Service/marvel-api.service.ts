import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {


  constructor(private http:HttpClient) { }

   BaseUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';

  GetAllCharacters():Observable<any>
  {
    return this.http.get(this.BaseUrl);
  }


    /*-----------------------------------------------------*/

  GetAllComics():Observable<any>
  {
    const comicsUrl ='https://gateway.marvel.com:443/v1/public/comics?limit=20&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    ;
    return this.http.get(comicsUrl);
  }

  /*------------------------------------------------------*/

  GetAllCreators(): Observable<any> //
  {
    const creatorsUrl ='https://gateway.marvel.com:443/v1/public/creators?limit=20&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    ;
    return this.http.get(creatorsUrl);
  }

  /*------------------------------------------------------*/

  GetAllSeries():Observable<any>
  {
    const seriesUrl ='https://gateway.marvel.com:443/v1/public/series?limit=20&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    ;
    return this.http.get(seriesUrl);
  }

  /*-----------------------------------------------------*/

  GetAllStories(): Observable<any>
  {
    const storiesUrl ='https://gateway.marvel.com:443/v1/public/stories?limit=20&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    ;
    return this.http.get(storiesUrl);
  }

  /*-----------------------------------------------------*/

  GetCharacterBySeriesId(seriesId : number):Observable<any>
  {
    const characterBySeriesId = `https://gateway.marvel.com:443/v1/public/series/${seriesId}/characters?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`
     return this.http.get(characterBySeriesId);

  }

/*-----------------------------------------------------*/

  GetComicsByCharacter(characterId:string):Observable<any>
  {
    const comicsByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(comicsByCharacterUrl);
  }

  /*------------------------------------------------------

  GetCreatorsByComics(characterId:string):Observable<any>
  {
    const creatorsByComicsUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(creatorsByComicsUrl);
  }

  /*------------------------------------------------------

  GetSeriesByCharacterId(characterId:string):Observable<any>
  {
    const seriesByCharacterIdUrl = `https://gateway.marvel.com:443/v1/public/series/${characterId}/characters?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(seriesByCharacterIdUrl);
  }

  /*------------------------------------------------------

  GetStoriesByCharacter(characterId:string):Observable<any>
  {
    const storiesByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/stories?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(storiesByCharacterUrl);
  }

  /*------------------------------------------------------

  GetCharacterByName(characterName:string):Observable<any>
  {
    const characterByNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(characterByNameUrl);
  }
  */


}
