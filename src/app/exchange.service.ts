import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExchangeService {
  constructor(private http: HttpClient) {}

  getAllCurrencies() {
    //let p1 = new HttpHeaders().set('nadher', 'nidhal');
    let p = new HttpParams().set(
      'access_key',
      '7b239b58f93255b5ef5795cdc77cee8c'
    );
    return this.http.get('http://apilayer.net/api/live', {
      params: p,
      // headers: p1,
    });
  }
}
