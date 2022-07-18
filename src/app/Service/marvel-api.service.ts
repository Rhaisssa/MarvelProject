import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarvelAPIService {

  constructor(private http:HttpClient) { }

   BaseUrl = 'https://gateway.marvel.com:443/v1/public/characters?limit=20&ts=1&apikey=55ea393c1ffa2d68b8d0681f7a613471&hash=b7d5c73606fb2644f4175f80191c1d71';

}

