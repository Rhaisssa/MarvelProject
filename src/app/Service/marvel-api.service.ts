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

  /*------------------------------------------------------

  allComics():Observable<any>
  {
    const comicsUrl ='https://gateway.marvel.com:443/v1/public/comics?limit=20&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    ;
    return this.http.get(comicsUrl);
  }

  /*------------------------------------------------------

  allCreators():Observable<any>
  {
    const creatorsUrl ='https://gateway.marvel.com:443/v1/public/creators?limit=10&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    ;
    return this.http.get(creatorsUrl);
  }

  /*------------------------------------------------------

  allSeries():Observable<any>
  {
    const seriesUrl ='https://gateway.marvel.com:443/v1/public/series?limit=10&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64';
    ;
    return this.http.get(seriesUrl);
  }

    /*------------------------------------------------------*/

  getComicsByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(comicByCharacterUrl);
  }

  /*------------------------------------------------------

  getSeriesByCharacter(characterId:string):Observable<any>
  {
    const comicByCharacterUrl = `https://gateway.marvel.com:443/v1/public/characters/${characterId}/series?ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(comicByCharacterUrl);
  }

  /*------------------------------------------------------

  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=9f1a0f5df8e037ee673c696423fecb64`;
    return this.http.get(characterBYNameUrl);
  }

*/
}
