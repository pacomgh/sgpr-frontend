import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { StrategyInterface } from '../models/strategy.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class StrategyService {


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

  loadStrategies(){
    const url = `${base_url}/strategies`;

    return this.http.get<StrategyInterface>
          (url, {headers: {responseType: 'json'}} )
          .pipe(
            map((resp: StrategyInterface) => resp.strategies)
          );
  }
}
