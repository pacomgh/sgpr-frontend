

export class EvolverTask{

  constructor(
    blackbox: String,
    timeframe: String,
    exchange: String,
    market_type: String,
    symbol: String,
    period: [],
    train_test_prop: Number,
    parameters: String,
    filter: [],
    running: Boolean,
    _id?: String,
  ){}
}

export interface EvolverTaskInterface{
  ok: boolean;
  evolverTasks: EvolverTask[];
  uid: String;

}

export interface EvolverTask{
  blackbox: String,
  timeframe: String,
  exchange: String,
  market_type: String,
  symbol: String,
  period: [],
  train_test_prop: Number,
  parameters: String,
  filter: [],
  running: Boolean,
  _id?: String,
}
