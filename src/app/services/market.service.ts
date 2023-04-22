import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Market, MarketInterface } from '../models/market.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(
    private http: HttpClient,
  ) { }

  // get token(): string {
  //   return localStorage.getItem('token') || '';

  // }

  // get headers(){
  //   return {
  //     headers: {
  //       'x-token': this.token;
  //     }
  //   }
  // }

  loadMarkets(){
    const url = `${base_url}/markets`;

    return this.http.get<MarketInterface>
          (url, {headers: {responseType: 'json'}} )
          .pipe(
            map((resp: MarketInterface) => resp.markets)
          );
  }

}
