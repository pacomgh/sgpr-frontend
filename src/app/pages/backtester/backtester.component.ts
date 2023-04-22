import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MarketService } from 'src/app/services/market.service';
import { HttpClient } from '@angular/common/http';
import { StrategyService } from 'src/app/services/strategy.service';

@Component({
  selector: 'app-backtester',
  templateUrl: './backtester.component.html',
  styleUrls: ['./backtester.component.css']
})

export class BacktesterComponent {

  public markets:any = [];
  public strategies:any = [];
  public cargando:boolean = true;
  public timeframes = ['5min', '10min', '15min', '30min', '45min', '75min', '1h',
              '2h', '4h', '6h', '8h', '10h','12h', '1D', '2D', '3D'];

  constructor(
    private HttpClient: HttpClient,
    private marketService: MarketService,
    private strategyService: StrategyService
  ){ }

  ngOnInit(): void{
    this.cargarMarkets();
    this.cargarStrategies();
  }

  cargarMarkets(){

    this.cargando = true;

    this.marketService.loadMarkets()
      .subscribe( markets => {
        // for (const item of markets) {
        //   console.log(markets[0].exchange_id);
        //   if (!markets[0].exchange_id.includes(item.exchange_id)) {
        //       markets.push(item);
        //   }
        // }
        this.markets = markets;
      })
  }

  cargarStrategies(){

    this.cargando = true;

    this.strategyService.loadStrategies()
      .subscribe( strategies => {
        console.log(strategies);
        this.strategies = strategies;
      })
  }

  selected = 'option2';


}
