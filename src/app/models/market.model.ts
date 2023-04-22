

export class Market{

  constructor(
    exchange_id: String,
    symbol: String,
    type: String,
    id: String,
    minNotional: number,
    precision: [],
    _id?: String,
  ){}
}

export interface MarketInterface{
  ok: boolean;
  markets: Market[];
  uid: String;

}

export interface Market{
  exchange_id: String,
  symbol: String,
  type: String,
  id: String,
  minNotional: number,
  precision: [],
  _id?: String,
}
