import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private _http: HttpClient) { 

  }

  public getVideo(textoBuscado: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
        'X-RapidAPI-Key': '98b503c8dcmsh43cf2bf45c2fb86p14c31cjsn4c7cef2aa00f',
      }),
    }
    return this._http.get("https://simple-youtube-search.p.rapidapi.com/search?query="+textoBuscado+"&type=video&safesearch=false", httpOptions);
  }

  public obtenerVideo(textoBuscado: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com',
        'X-RapidAPI-Key': '98b503c8dcmsh43cf2bf45c2fb86p14c31cjsn4c7cef2aa00f',
      }),
      params: {
        query: textoBuscado,
        safesearch: 'false'
      }
    }
    return this._http.get("https://simple-youtube-search.p.rapidapi.com/search", httpOptions);
  }

}
