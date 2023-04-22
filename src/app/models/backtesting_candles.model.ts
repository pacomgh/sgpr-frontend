export class BacktestingCandles{

  constructor(
    timestamp: Number,
    datetime: Date,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    symbol: String,
    timeframe: String,
    exchange_id: String,
    market_type: String,
    _id?: String,
  ){}
}

export interface BacktestingCandlesInterface{
  ok: boolean;
  backtesting_candles: BacktestingCandles[];
  uid: String;

}

export interface BacktestingCandles{
    timestamp: Number,
    datetime: Date,
    open: Number,
    high: Number,
    low: Number,
    close: Number,
    symbol: String,
    timeframe: String,
    exchange_id: String,
    market_type: String,
    _id?: String,
}
