import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public getSigno(signo: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com',
        'X-RapidAPI-Key': '98b503c8dcmsh43cf2bf45c2fb86p14c31cjsn4c7cef2aa00f',
      }),
      params: {
        s: signo
      }
    }
    return this._http.get("https://horoscope-astrology.p.rapidapi.com/sign", httpOptions);
  }
}
