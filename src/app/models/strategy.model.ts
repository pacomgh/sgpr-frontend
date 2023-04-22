export class Strategy{

  constructor(
    name: String,
    metaname: String,
    user: String,
    active: boolean,
    symbol: String,
    blackbox: String,
    timeframe: String,
    fitness: Number,
    params: [],
    creation_date: Date,
    training_period: [],
    security: [],
    cluster: Number,
    exchange: String,
    market_type: String,
    _id?: String,
  ){}
}

export interface StrategyInterface{
  ok: boolean;
  strategies: Strategy[];
  uid: String;

}

export interface Strategy{
  name: String,
  metaname: String,
  user: String,
  active: boolean,
  symbol: String,
  blackbox: String,
  timeframe: String,
  fitness: Number,
  params: [],
  creation_date: Date,
  training_period: [],
  security: [],
  cluster: Number,
  exchange: String,
  market_type: String,
  _id?: String,
}
