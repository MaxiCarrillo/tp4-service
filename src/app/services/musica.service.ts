import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private _http: HttpClient) { }

  public getCancion(id: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        'X-RapidAPI-Key': '98b503c8dcmsh43cf2bf45c2fb86p14c31cjsn4c7cef2aa00f',
      }),
    }
    return this._http.get("https://deezerdevs-deezer.p.rapidapi.com/track/"+id, httpOptions);
  }

}
